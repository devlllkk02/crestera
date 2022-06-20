// ------ Share Routes  ------
// Imports
const express = require("express");
const {
  shareGetNoteUsersController,
  shareAddUserToNoteController,
  shareAddUserCircleToNoteController,
  shareRemoveUserToNoteController,
  shareRemoveUserFromNoteController,
} = require("../controllers/ShareController");
const router = express.Router();

//Middleware
const AuthMiddleware = require("../middleware/AuthMiddleware");

//? ------ GET ROUTES ------

//? ------ POST ROUTES ------
//Get Note Users
router.post(
  "/share/note/getusers",
  AuthMiddleware,
  shareGetNoteUsersController
);

//? ------ UPDATE ROUTES ------
//Add user to note
router.put("/share/note/adduser", AuthMiddleware, shareAddUserToNoteController);

//Remove user from a note
router.put(
  "/share/note/removeuser",
  AuthMiddleware,
  shareRemoveUserFromNoteController
);

//Add usercircle to note
router.put(
  "/share/note/addusercircle",
  AuthMiddleware,
  shareAddUserCircleToNoteController
);

//? ------ DELETE ROUTES ------

module.exports = router;
