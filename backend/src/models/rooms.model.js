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
      minlength: 6,
      maxlength: 72,
    },
    users: {
      type: [String],
      required: true,
      validate: {
        validator: function (v) {
          return /^\w{3,20}$/.test(v);
        },
        message:
          "Only alphanumeric and underscore characters allowed, [a-z, A-Z, 0-9, _]",
      },
      minlength: 3,
      maxlength: 20,
    },
  },
  { timestamps: true },
);

const Room = mongoose.model("Room", roomSchema);
export default Room;
