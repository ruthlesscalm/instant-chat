import config from "../config/index.js";
import crypto from "node:crypto";
import AppError from "../errors/appError.js";
import Room from "../models/rooms.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.utils.js";

const cookieOptions = {
  httpOnly: true,
  secure: config.PRODUCTION,
  sameSite: "lax",
};

const normalize = (v) => v?.toLowerCase().trim();

const createRoom = asyncHandler(async (req, res) => {
  const username = normalize(req.body?.username);
  const password = req.body?.password;

  if (!username) {
    throw new AppError(
      "Username field cannot be empty",
      400,
      "USERNAME_FIELD_EMPTY",
    );
  }
  if (!password) {
    throw new AppError(
      "Password field cannot be empty",
      400,
      "PASSWORD_FIELD_EMPTY",
    );
  }
  if (password.length < 6 || password.length > 72) {
    throw new AppError(
      "Password length must be between 6 and 72 characters",
      400,
      "PASSWORD_FIELD_INVALID",
    );
  }
  if (!/^[a-z0-9_]{3,20}$/.test(username)) {
    throw new AppError(
      "Username can only contain alphanumeric and underscore, [a-z, 0-9, _] and the characters length should be between 3 and 20",
      400,
      "USERNAME_FIELD_INVALID",
    );
  }

  const roomId = crypto.randomUUID();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newRoom = await Room.create({
    roomId,
    password: hashedPassword,
    users: [username],
  });

  const accessToken = jwt.sign(
    {
      roomId: newRoom.roomId,
      username,
    },
    config.JWT_ACCESS_TOKEN,
    {
      expiresIn: "1d",
    },
  );
  const adminToken = jwt.sign(
    {
      roomId: newRoom.roomId,
      username,
      role: "admin",
    },
    config.JWT_ADMIN_TOKEN,
    {
      expiresIn: "1d",
    },
  );

  return res
    .cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 24 * 60 * 60 * 1000,
    })
    .cookie("adminToken", adminToken, {
      ...cookieOptions,
      maxAge: 24 * 60 * 60 * 1000,
    })
    .status(201)
    .json({
      success: true,
      message: "Room creation successful",
      code: "ROOM_CREATION_SUCCESS",
      username,
      roomId: newRoom.roomId,
    });
});

const joinRoom = asyncHandler(async (req, res) => {
  const roomId = req.params?.roomId;
  const username = normalize(req.body?.username);
  const password = req.body?.password;

  if (!username) {
    throw new AppError(
      "Username field cannot be empty",
      400,
      "USERNAME_FIELD_EMPTY",
    );
  }
  if (!password) {
    throw new AppError(
      "Password field cannot be empty",
      400,
      "PASSWORD_FIELD_EMPTY",
    );
  }
  const existingRoom = await Room.findOne({ roomId }).select("+password");

  // if (room.users.includes(username)) {
  //   throw new AppError(
  //     "Username already exists, pick another username",
  //     400,
  //     "USERNAME_ALREADY_EXISTS",
  //   );
  // }
  const isPassword = await bcrypt.compare(password, existingRoom.password);

  if (!isPassword) {
    throw new AppError(
      "Invalid roomId or password",
      401,
      "INVALID_CREDENTIALS",
    );
  }
  const room = await Room.findOneAndUpdate(
    { roomId },
    {
      $addToSet: {
        users: username,
      },
    },
  ).select("users");
  return res.status(200).json({
    success: true,
    message: "Welcome",
    roomId,
    username,
    join,
  });
});

export { createRoom, joinRoom };
