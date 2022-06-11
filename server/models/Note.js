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
      type: String,
    },
    thumbnail: {
      type: String,
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
    },
    members: [
      {
        member: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        canEdit: {
          type: Boolean,
          default: false,
        },
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
