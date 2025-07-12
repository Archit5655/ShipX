
import dotenv from "dotenv";
import { Redis } from "ioredis";
import { config } from "../config/env.config.js";
import type { Server } from "socket.io";
dotenv.config();


const subscriber = new Redis(config.REDIS_KEY!);

export const initRedisSubscribe = async(socket:Server) => {

  subscriber.psubscribe("logs:*");
  subscriber.on("pmessage", (pattern, channel, message) => {
    console.log(`Received message from ${channel}: ${message}`);
    socket.to(channel).emit("message", message);
  });
};