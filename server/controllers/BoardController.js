// ------ Note Controller  ------

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BOard = require('../models/Board');
require("dotenv").config();
const ResponseService = require('../utils/ResponseService'); // Response service

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

    sortedboards = sortedboards.slice(0, 10);

    res.json({ sortedboards });
  } catch (error) {
    console.log(error);
  }
};

//Get One Board
exports.getSingleBoardController = (req, res) => {
  Board.findById(req.params.boardId)
    .populate("createdBy", "-password")
    .then((board) => res.send(board))
    .catch((error) => {
      console.log(error);
      res.status(422).json({ error: "Invalid board id!" });
    });
};

//Update One Board
exports.updateSingleBoardController = (req, res) => {
  Board.findByIdAndUpdate(req.params.boardId, req.body, { new: true }).exec(
    (error, result) => {
      if (error) return res.status(422).json({ error: error });
      else res.send(result);
    }
  );
};

//Delete One Board
exports.deleteSingleBoardController = async (req, res) => {
  try {
    const board = await Board.findOne({ _id: req.params.boardId }).exec();

    if (board.createdBy._id.toString() === req.user._id.toString()) {
      const removedBoard = await board.remove();
      const updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        {
          $inc: { boardCount: -1 },
        },
        { new: true }
      );
      res.json({
        message: "Board deleted successfully!",
        removedBoard: removedBoard,
        updatedUser: updatedUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Get notification
exports.getBoardNotification = (async (req, res) => {
  const uid = req.params.id;
  BOard.find( { members: { $elemMatch: { member : uid , seen: "false"} } }, (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
  })
});

//update seen
exports.updateSeen = async function (req, res) {
  UserCircle.updateOne(
    { 'members.member': req.body.memberId , '_id':req.body.boardId},
    { $set: { 'members.$.seen': req.body.seen } },
    (err, doc) => {
      ResponseService.generalResponse(err, res);
    }
  );
};