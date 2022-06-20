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
  getRecommendedBoardsController,
  getSingleBoardController,
  updateSingleBoardController,
  deleteSingleBoardController,
} = require("../controllers/BoardController");

//? ------ GET ROUTES ------
//ROUTE : GET : Get Board Of A User
router.get("/getboards", AuthMiddleware, getBoardsController);

//ROUTE : GET : Get Recommended Notes and Boards Of A User
router.get(
  "/getrecommendedboards",
  AuthMiddleware,
  getRecommendedBoardsController
);

//ROUTE : GET : Get One Note
router.get("/board/:boardId", AuthMiddleware, getSingleBoardController);

//? ------ POST ROUTES ------
//ROUTE : POST : Create Board
router.post("/createboard", AuthMiddleware, createBoardController);

//? ------ UPDATE ROUTES ------
//ROUTE : PUT : Update One Board
router.put(
  "/updateboard/:boardId",
  AuthMiddleware,
  updateSingleBoardController
);

//? ------ DELETE ROUTES ------
//ROUTE : DELETE : Delete One Board
router.delete(
  "/deleteboard/:boardId",
  AuthMiddleware,
  deleteSingleBoardController
);

module.exports = router;
