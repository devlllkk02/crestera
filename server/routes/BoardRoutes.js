// ------ Board Routes  ------
// Imports
const express = require("express");
const router = express.Router();

//Middleware
const AuthMiddleware = require("../middleware/AuthMiddleware");

//Controller
const {
  createBoardController,
  getBoardsController,
} = require("../controllers/BoardController");

//? ------ GET ROUTES ------
//ROUTE : GET : Get Board Of A User
router.get("/getboards", AuthMiddleware, getBoardsController);

//? ------ POST ROUTES ------
//ROUTE : POST : Create Board
router.post("/createboard", AuthMiddleware, createBoardController);

module.exports = router;
