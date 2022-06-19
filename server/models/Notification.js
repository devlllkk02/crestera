const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const NotificationSchema = new mongoose.Schema(
  {
    user: { type: ObjectId, ref: "User" },
    data: [
      {
        date: { type: Date, default: new Date() },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
