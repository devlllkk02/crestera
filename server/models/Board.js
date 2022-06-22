const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const BoardSchema = new mongoose.Schema(
  {
    fileIcon: {
      type: String,
      default: "board",
    },
    fileName: {
      type: String,
    },
    data: {
      type: String,
      default: "",
    },
    thumbnail: {
      type: String,
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
    },
    onlineUsers: [
      {
        user: {
          type: ObjectId,
          ref: "User",
        },
        socketId: {
          type: String,
        },
      },
    ],
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    circles: [
      {
        circle: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "UserCircle",
        },
        canEdit: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Board", BoardSchema);
