const mongoose = require("mongoose");

const FolderSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Please provide a name to the folder"],
  },
  addedOn: Date,
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

module.exports = mongoose.model("Folder", FolderSchema);
