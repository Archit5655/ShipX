import { serve } from "@hono/node-server";
dotenv.config();
import { Hono } from "hono";
import ProjectRoutes from "./routes/route.js";
import dotenv from "dotenv";
import { validateEnv } from "./config/config.js";
import { cors } from "hono/cors";
import { Server } from "socket.io";
import type { Server as HTTPServer } from "node:http";
import { initRedisSubscribe } from "./services/redis.subscribe.js";
const app = new Hono();
app.use(
  cors({
    origin: "*",
  })
);
validateEnv();
const PORT: number = parseInt(process.env.PORT!);
// This route will work on /api/v1/project
app.route("/api/v1", ProjectRoutes);
app.get("/", (c) => {
  return c.text("Hello Hono!");
});
const io = new Server(9001, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  socket.on("subscribe", (channel) => {
    socket.join(channel);
    socket.emit("message", `Subscribed to ${channel}`);
  });
});

initRedisSubscribe(io);

const httpserver = serve(
  {
    fetch: app.fetch,
    port: PORT,
  },
  () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
);
