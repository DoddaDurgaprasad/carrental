import dotenv from "dotenv";
dotenv.config();

import transporter from "./configs/mail.js";

async function sendTestMail() {
    try {
        console.log("📧 Sending test email...");

        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Test Email - Car Rental",
            html: `
                <h2>🚗 Test Mail Success</h2>
                <p>If you received this, Nodemailer is working correctly.</p>
            `,
        });

        console.log("✅ Email sent:", info.messageId);
    } catch (err) {
        console.error("❌ Email error:", err);
    }
}

await transporter.verify();
console.log("✅ SMTP Verified");

await sendTestMail();