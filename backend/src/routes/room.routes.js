import express from "express";
import { createRoom, joinRoom } from "../controller/room.controller.js";

const router = express.Router();

router.post("/", createRoom);
router.post("/join/:roomId", joinRoom);

export default router;
