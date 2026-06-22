import crypto from "crypto";
import Booking from "../models/Booking.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import { checkAvailability } from "../utils/checkAvailability.js";

export const verifyPayment = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }

    const { _id } = req.user;

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      car,
      pickupDate,
      returnDate,
    } = req.body;

    // Verify signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    const isAvailable = await checkAvailability(
      car,
      pickupDate,
      returnDate
    );

    if (!isAvailable) {
      return res.status(400).json({
        success: false,
        message: "Car no longer available",
      });
    }

    const carData = await Car.findById(car);

    if (!carData) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    const picked = new Date(pickupDate);
    const returned = new Date(returnDate);

    if (isNaN(picked) || isNaN(returned) || returned <= picked) {
      return res.status(400).json({
        success: false,
        message: "Invalid dates",
      });
    }

    const noOfDays = Math.ceil(
      (returned - picked) / (1000 * 60 * 60 * 24)
    );

    const price = carData.pricePerDay * noOfDays;

    const booking = await Booking.create({
      car,
      owner: carData.owner,
      user: _id,
      pickupDate,
      returnDate,
      price,
      paymentStatus: "paid",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      status: "confirmed",
    });

    const owner = await User.findById(carData.owner);

    if (owner) {
      const commission = 0.1;
      const ownerAmount = price * (1 - commission);

      owner.earnings = (owner.earnings || 0) + ownerAmount;
      await owner.save();
    }

    return res.json({
      success: true,
      message: "Payment verified",
      booking,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};