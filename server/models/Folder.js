const mongoose = require("mongoose");

const FolderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  addedOn: {
    type: Date,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  size: {
    type: Number,
    default: 0
  },
  motherFolder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Folder'
  },
  members: [{
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    canEdit: {
      type: Boolean,
      default: false
    },
  }],
  circles: [{
    circle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserCircle'
    },
    canEdit: {
      type: Boolean,
      default: false
    },
  }],
});

module.exports = mongoose.model("Folder", FolderSchema);
