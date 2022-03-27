// Imports
const express = require("express");
const router = express.Router();
const { signupController } = require("../controllers/AuthController");

// Signup
router.post("/signup", signupController);

module.exports = router;
