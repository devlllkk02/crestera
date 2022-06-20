const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
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
    noteCount: {
      type: Number,
      default: 0,
    },
    boardCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", Schema);
