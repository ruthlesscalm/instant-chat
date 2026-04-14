import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
  PRODUCTION: process.env.PRODUCTION || false,
};

export default config;
