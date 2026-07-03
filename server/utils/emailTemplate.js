const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

const userBookingTemplate = ({
    userName,
    bookingId,
    carName,
    pickupDate,
    returnDate,
    totalPrice,
}) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:8px; overflow:hidden;">
        
        <div style="background:#2563eb; color:white; padding:20px; text-align:center;">
            <h1>🚗 Booking Confirmed</h1>
        </div>

        <div style="padding:25px;">

            <h2>Hello ${userName},</h2>

            <p>
                Thank you for booking with <strong>CarRental</strong>.
                Your booking has been confirmed successfully.
            </p>

            <table style="width:100%; border-collapse:collapse;">
                <tr>
                    <td><strong>Booking ID</strong></td>
                    <td>${bookingId}</td>
                </tr>

                <tr>
                    <td><strong>Car</strong></td>
                    <td>${carName}</td>
                </tr>

                <tr>
                    <td><strong>Pickup Date</strong></td>
                    <td>${formatDate(pickupDate)}</td>
                </tr>

                <tr>
                    <td><strong>Return Date</strong></td>
                    <td>${formatDate(returnDate)}</td>
                </tr>

                <tr>
                    <td><strong>Total Amount</strong></td>
                    <td>₹${totalPrice}</td>
                </tr>
            </table>

            <br>

            <p>
                Please arrive on time with your valid driving license and
                required documents.
            </p>

            <p>
                We hope you enjoy your journey!
            </p>

            <br>

            <p>
                Regards,<br>
                <strong>CarRental Team</strong>
            </p>

        </div>

    </div>
    `;
};

const ownerBookingTemplate = ({
    ownerName,
    customerName,
    bookingId,
    carName,
    pickupDate,
    returnDate,
    totalPrice,
}) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:8px; overflow:hidden;">

        <div style="background:#16a34a; color:white; padding:20px; text-align:center;">
            <h1>🎉 New Booking Received</h1>
        </div>

        <div style="padding:25px;">

            <h2>Hello ${ownerName},</h2>

            <p>
                Great news! A customer has booked your vehicle.
            </p>

            <table style="width:100%; border-collapse:collapse;">

                <tr>
                    <td><strong>Booking ID</strong></td>
                    <td>${bookingId}</td>
                </tr>

                <tr>
                    <td><strong>Customer</strong></td>
                    <td>${customerName}</td>
                </tr>

                <tr>
                    <td><strong>Car</strong></td>
                    <td>${carName}</td>
                </tr>

                <tr>
                    <td><strong>Pickup Date</strong></td>
                    <td>${formatDate(pickupDate)}</td>
                </tr>

                <tr>
                    <td><strong>Return Date</strong></td>
                    <td>${formatDate(returnDate)}</td>
                </tr>

                <tr>
                    <td><strong>Booking Amount</strong></td>
                    <td>₹${totalPrice}</td>
                </tr>

            </table>

            <br>

            <p>
                Please ensure the vehicle is clean, fueled (if applicable),
                and ready before the pickup date.
            </p>

            <br>

            <p>
                Regards,<br>
                <strong>CarRental Team</strong>
            </p>

        </div>

    </div>
    `;
};

export { userBookingTemplate, ownerBookingTemplate };