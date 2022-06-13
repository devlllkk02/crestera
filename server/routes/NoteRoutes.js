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
  updateSingleNoteController,
} = require("../controllers/NoteController");

//? ------ GET ROUTES ------
//ROUTE : GET : Notes Of A User
router.get("/getnotes", AuthMiddleware, getNotesController);

//ROUTE : GET : Get One Note
router.get("/note/:noteId", AuthMiddleware, getSingleNoteController);

//? ------ POST ROUTES ------
//ROUTE : POST : Create Note
router.post("/createnote", AuthMiddleware, createNoteController);

//? ------ UPDATE ROUTES ------
//ROUTE : PUT : Update One Note
router.put("/update/:noteId", AuthMiddleware, updateSingleNoteController);

module.exports = router;
