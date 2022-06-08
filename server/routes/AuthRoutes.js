// Imports
const express = require("express");
const router = express.Router();
const {
  signupController,
  loginController,
  protectedController,
} = require("../controllers/AuthController");

const AuthMiddleware = require("../middleware/AuthMiddleware");

// Signup
router.post("/signup", signupController);

// Login
router.post("/login", loginController);

//Protected
router.get("/protected", AuthMiddleware, protectedController);

module.exports = router;
