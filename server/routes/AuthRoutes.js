// Imports
const express = require("express");
const router = express.Router();
const {
  signupController,
  loginController,
  protectedController,
  getUser,
} = require("../controllers/AuthController");

const AuthMiddleware = require("../middleware/AuthMiddleware");

// Signup
router.post("/signup", signupController);

// Login
router.post("/login", loginController);

//Get Logged in User
router.get("/getuser", AuthMiddleware, getUser);

//Protected
router.get("/protected", AuthMiddleware, protectedController);

module.exports = router;
