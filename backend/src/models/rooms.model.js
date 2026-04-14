import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    users: {
      type: [String],
      required: true,
      validate: [
        {
          validator: function (arr) {
            return arr.every((username) => /^[a-z0-9_]{3,20}$/.test(username));
          },
          message:
            "Each username must be 3–20 chars and only contain [a-z, 0-9, _]",
        },
        {
          validator: function (arr) {
            return arr.length <= 50;
          },
          message: "Room cannot have more than 50 users",
        },
      ],
    },
  },
  { timestamps: true },
);

const Room = mongoose.model("Room", roomSchema);
export default Room;
