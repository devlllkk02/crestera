const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { JWT_SECRET } = require("../keys/keys");

const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Please login to proceed further!" });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (error, payload) => {
    if (error) {
      return res
        .status(401)
        .json({ error: "Please login to proceed further!" });
    }

    const { _id } = payload;

    User.findOne({ _id: _id }).then((userData) => {
      req.user = userData;
      next();
    });
  });
};
