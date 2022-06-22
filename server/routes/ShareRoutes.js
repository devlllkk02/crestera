// ------ Share Routes  ------
// Imports
const express = require("express");
const {
  shareGetNoteUsersController,
  shareAddUserToNoteController,
  shareAddUserCircleToNoteController,
  shareRemoveUserToNoteController,
  shareRemoveUserFromNoteController,
  shareGetBoardUsersController,
  shareAddUserToBoardController,
  shareRemoveUserFromBoardController,
  shareAddUserCircleToBoardController,
} = require("../controllers/ShareController");
const router = express.Router();

//Middleware
const AuthMiddleware = require("../middleware/AuthMiddleware");

//? ------ GET ROUTES ------

//? ------ POST ROUTES ------
//* Note 
//Get Note Users
router.post(
  "/share/note/getusers",
  AuthMiddleware,
  shareGetNoteUsersController
);

//* Board
//Get Board Users
router.post(
  "/share/board/getusers",
  AuthMiddleware,
  shareGetBoardUsersController
);

//? ------ UPDATE ROUTES ------
//* Note 
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

//* Board
//Add user to board
router.put("/share/board/adduser", AuthMiddleware, shareAddUserToBoardController);

//Remove user from a board
router.put(
  "/share/board/removeuser",
  AuthMiddleware,
  shareRemoveUserFromBoardController
);

//Add usercircle to board
router.put(
  "/share/board/addusercircle",
  AuthMiddleware,
  shareAddUserCircleToBoardController
);

//? ------ DELETE ROUTES ------

module.exports = router;
