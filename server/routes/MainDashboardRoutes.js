// ------ Main Dashboard Routes  ------
// Imports
const express = require("express");
const router = express.Router();

//Middleware
const AuthMiddleware = require("../middleware/AuthMiddleware");

//Controller
const {
  createNoteController,
  getNotesController,
} = require("../controllers/NoteController");

const {
  createBoardController,
  getBoardsController,
} = require("../controllers/BoardController");

//? ------ GET ROUTES ------
//ROUTE : GET : Get Notes and Boards Of A User


module.exports = router;
