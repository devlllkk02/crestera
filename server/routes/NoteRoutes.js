// ------ Note Routes  ------
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

//? ------ GET ROUTES ------
//ROUTE : GET : Get Notes Of A User
router.get("/getnotes", AuthMiddleware, getNotesController);

//? ------ POST ROUTES ------
//ROUTE : POST : Create Note
router.post("/createnote", AuthMiddleware, createNoteController);

module.exports = router;
