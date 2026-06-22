import Car from "../models/Car.js";
import Razorpay from "../configs/razorpay.js";
import { checkAvailability } from "../utils/checkAvailability.js";


export const createOrder = async (req, res) => {
  try {
    const { car, pickupDate, returnDate } = req.body;

    const isAvailable = await checkAvailability(car, pickupDate, returnDate);

    if (!isAvailable) {
      return res.status(400).json({
        success: false,
        message: "Car not Available",
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
        message: "Invalid Dates",
      });
    }

    const noOfDays = Math.ceil(
      (returned - picked) / (1000 * 60 * 60 * 24)
    );

    const price = carData.pricePerDay * noOfDays;

    const order = await Razorpay.orders.create({
      amount: price * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    });

    return res.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
      price,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};