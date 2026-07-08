import IORedis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// Fallback to local 127.0.0.1 if process.env.REDIS_URL is blank or missing
const redisUrl = process.env.REDIS_URL || "redis://127.0.0.1:6379";

const connection = new IORedis(redisUrl, {
    maxRetriesPerRequest: null,
}); 

connection.on("connect", () => {
    console.log("Redis Connected Successfully! 🚀");
});

connection.on("error", (err) => {
    console.error("Redis Error:", err.message);
});

export default connection;