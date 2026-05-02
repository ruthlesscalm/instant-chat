import express from "express";
import roomRouter from "./routes/room.routes.js";
import cookieParser from "cookie-parser";
import connectToDB from "./database/db.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cors from "cors";

connectToDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: function (origin, cb) {
      if (!origin || origin === "http://localhost:5173") {
        cb(null, true);
      } else {
        cb(new Error("Not Allowed by Cors"));
      }
    },
  }),
);

app.use("/api/rooms", roomRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(errorMiddleware);

export default app;
