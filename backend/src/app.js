import express from "express";
import roomRouter from "./routes/room.routes.js";
import cookieParser from "cookie-parser";
import connectToDB from "./database/db.js";

connectToDB();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/rooms", roomRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
