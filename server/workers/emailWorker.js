import { Worker } from "bullmq";
import connection from "../configs/redis.js";
import transporter from "../configs/mail.js";

import Booking from "../models/Booking.js";

import {
    userBookingTemplate,
    ownerBookingTemplate,
} from "../utils/emailTemplate.js";
console.log("email worker started");

const worker=new Worker(
    "emailQueue",
    async (job) => {
         console.log("📨 Worker received job:", job.id, job.data);
        try {

            const booking = await Booking.findById(job.data.bookingId)
                .populate("user")
                .populate("owner")
                .populate("car");

            if (!booking) return;

            // Customer Email
            await transporter.sendMail({
                from: process.env.SENDER_EMAIL,
                to: booking.user.email,
                subject: "Your Booking is Confirmed 🚗",
                html: userBookingTemplate({
                    userName: booking.user.name,
                    bookingId: booking._id,
                    carName: `${booking.car.brand} ${booking.car.model}`,
                    pickupDate: booking.pickupDate,
                    returnDate: booking.returnDate,
                    totalPrice: booking.price,
                }),
            });

            // Owner Email
            await transporter.sendMail({
                from: process.env.SENDER_EMAIL,
                to: booking.owner.email,
                subject: "New Booking Received 🎉",
                html: ownerBookingTemplate({
                    ownerName: booking.owner.name,
                    customerName: booking.user.name,
                    bookingId: booking._id,
                    carName: `${booking.car.brand} ${booking.car.model}`,
                    pickupDate: booking.pickupDate,
                    returnDate: booking.returnDate,
                    totalPrice: booking.price,
                }),
            });

            console.log("Emails sent successfully");

        } catch (err) {
            console.log(err);
        }
    },
    { connection,
        concurrency :1,
     }
);
worker.on("completed", (job) => {
    console.log(`Email job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
    console.log(`Email job ${job?.id} failed:`, err.message);
});