const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { JWT_SECRET } = require("../keys/keys");

const User = mongoose.model("User");

exports.updateUser = async (req, res) => {
  try {
    const newUser = await User.findOneAndUpdate(req.body.userId, req.body, {
      new: true,
    }).exec();
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
};
