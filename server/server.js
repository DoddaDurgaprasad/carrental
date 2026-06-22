import dns from 'node:dns'; 
dns.setServers(['1.1.1.1', '1.0.0.1']); // Forces public DNS resolution

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

//Initialize express app //0taVFw5DG6r5ADLI this was mongodb atlas
const app = express()

// connect database
await connectDB()

//middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send("server is running");
})
app.use('/api/user',userRouter)
app.use('/api/owner',ownerRouter)
app.use('/api/booking',bookingRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`);
})
