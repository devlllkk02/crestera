const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
  },
  lastLogin: {
    type: Date,
  },
});

module.exports = mongoose.model("User", Schema);
