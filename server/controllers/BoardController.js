// ------ Note Controller  ------

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

//Modles
const Board = mongoose.model("Board");

//Create Board
exports.createBoardController = (req, res) => {
  const { fileName, addedOn } = req.body;

  //Checking Empty Fields
  if (!fileName) {
    return res.status(401).json({ error: "Please enter a valid board name!" });
  }

  //Saving board in the database
  const board = new Board({
    fileName: fileName,
    createdBy: req.user,
  });

  board
    .save()
    .then((savedBoard) => {
      res.json({ message: "Board created succesfully!", note: savedBoard });
    })
    .catch((error) => console.log(error));
};

//Get Boards Of A User
exports.getBoardsController = (req, res) => {
  Board.find({ createdBy: req.user._id })
    .populate("createdBy")
    .then((notes) => {
      res.json({ notes: notes });
    })
    .catch((error) => {
      console.log(error);
    });
};
