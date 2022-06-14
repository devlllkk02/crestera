// ------ Note Controller  ------

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

//Modles
const Board = mongoose.model("Board");
const User = mongoose.model("User");

//Create Board
exports.createBoardController = async (req, res) => {
  try {
    const { fileName } = req.body;

    //Checking Empty Fields
    if (!fileName) {
      return res
        .status(401)
        .json({ error: "Please enter a valid board name!" });
    }

    const board = new Board({
      fileName: fileName,
      createdBy: req.user,
    });

    const savedBoard = await board.save();
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $inc: { boardCount: 1 },
      },
      { new: true }
    );

    res.json({
      message: "Board created succesfully!",
      board: savedBoard,
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

//Get Boards Of A User
exports.getBoardsController = (req, res) => {
  Board.find({ createdBy: req.user._id })
    .populate("createdBy")
    .then((boards) => {
      boards = boards.sort((a, b) => {
        return b.updatedAt - a.updatedAt;
      });
      res.json({ boards: boards });
    })
    .catch((error) => {
      console.log(error);
    });
};

//Get Recommended Boards of A User
exports.getRecommendedBoardsController = async (req, res) => {
  try {
    //Fetching boards and boards
    const boards = await Board.find({ createdBy: req.user._id }).populate(
      "createdBy"
    );

    //Sorting based on updated time
    let sortedboards = boards.sort((a, b) => {
      return b.updatedAt - a.updatedAt;
    });

    sortedboards = sortedboards.slice(0, 2);

    res.json({ sortedboards });
  } catch (error) {
    console.log(error);
  }
};
