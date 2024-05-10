import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import rootRouter from "./routes/index.js";

const server = express();

server.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

server.use(express.json({ limit: "16kb" }));
server.use(express.urlencoded({ extended: true, limit: "16kb" }));
server.use(express.static("public"));
server.use(cookieParser());

server.get("/", (req, res) => {
  res.send("<h1>Welcome to backend @ C3 Water</h1>");
});
server.use("/api/c3-water/v1", rootRouter);

export { server };
