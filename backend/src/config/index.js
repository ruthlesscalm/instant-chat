import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
  JWT_ADMIN_TOKEN: process.env.JWT_ADMIN_TOKEN,
  PRODUCTION: process.env.NODE_ENV === "production",
  MAX_USERS_PER_ROOM: process.env.MAX_USERS_PER_ROOM,
};

export default config;
