import express from "express";
import { createRoom } from "../controller/room.controller.js";

const router = express.Router();

router.post("/", createRoom);

export default router;
