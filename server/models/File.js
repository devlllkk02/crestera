const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  file: {
    type: String,
  },
  addedOn: Date,
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

module.exports = mongoose.model("File", FileSchema);
