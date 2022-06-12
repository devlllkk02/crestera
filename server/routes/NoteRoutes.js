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
  getSingleNoteController,
} = require("../controllers/NoteController");

//? ------ GET ROUTES ------
//ROUTE : GET : Notes Of A User
router.get("/getnotes", AuthMiddleware, getNotesController);

//ROUTE : GET : One Note
router.get("/note/:noteId", AuthMiddleware, getSingleNoteController);

//? ------ POST ROUTES ------
//ROUTE : POST : Create Note
router.post("/createnote", AuthMiddleware, createNoteController);

module.exports = router;
