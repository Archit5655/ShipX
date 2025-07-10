import { serve } from "@hono/node-server";
dotenv.config();
import { Hono } from "hono";
import ProjectRoutes from "./routes/route.js";
import dotenv from "dotenv";
import { validateEnv } from "./config/config.js";
import { cors } from "hono/cors";
import { Server } from "socket.io";
const app = new Hono();
app.use(
  cors({
    origin: "*",
  })
);
validateEnv();
const PORT: number = parseInt(process.env.PORT!);
// const SOCKET_PORT: number = parseInt(process.env.SOCKET_PORT!);
// This route will work on /api/v1/project
app.route("/api/v1", ProjectRoutes);
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: PORT,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
// Socket.io setup
