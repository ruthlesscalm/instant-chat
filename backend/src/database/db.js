import config from "../config/index.js";
import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log(`Connected to mongodb successfully`);
  } catch (err) {
    console.log("Error in db.js", err);
    process.exit(1);
  }
};

export default connectToDB;
