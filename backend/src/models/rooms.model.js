import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 72,
    },
  },
  { timestamps: true },
);

const Room = mongoose.model("Room", roomSchema);
export default Room;
