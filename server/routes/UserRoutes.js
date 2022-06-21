// ------ USer Routes  ------
// Imports
const express = require("express");
const { updateUser } = require("../controllers/UserController");

const router = express.Router();

//Middleware
const AuthMiddleware = require("../middleware/AuthMiddleware");


//? ------ UPDATE ROUTES ------
//ROUTE : PUT : Update user
router.put("/updateuser", AuthMiddleware, updateUser);


module.exports = router;
