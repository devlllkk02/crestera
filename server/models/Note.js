const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const NoteSchema = new mongoose.Schema(
  {
    fileIcon: {
      type: String,
      default: "note",
    },
    fileName: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
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

module.exports = mongoose.model("Note", NoteSchema);
