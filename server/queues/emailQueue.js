import { Queue } from "bullmq";
import connection from "../configs/redis.js";

const emailQueue = new Queue("emailQueue", {
    connection,
});

export default emailQueue;