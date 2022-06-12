// ------ Main Dashboard Routes  ------
// Imports
const express = require("express");
const router = express.Router();

//Middleware
const AuthMiddleware = require("../middleware/AuthMiddleware");

//Controller
const {
  getNotesAndBoardsController,
  getRecommendedNotesAndBoardsController,
} = require("../controllers/MainDashboardController");

//? ------ GET ROUTES ------
//ROUTE : GET : Get Notes and Boards Of A User
router.get("/getnotesandboards", AuthMiddleware, getNotesAndBoardsController);

//ROUTE : GET : Get Recommended Notes and Boards Of A User
router.get(
  "/getrecommendednotesandboards",
  AuthMiddleware,
  getRecommendedNotesAndBoardsController
);
module.exports = router;
