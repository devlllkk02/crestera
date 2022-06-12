// ------ Main Dashboard Controller  ------
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

//Modles
const Note = mongoose.model("Note");
const Board = mongoose.model("Board");

//Get Notes and Boards
exports.getNotesAndBoardsController = async (req, res) => {
  try {
    //Fetching notes and boards
    const notes = await Note.find({ createdBy: req.user._id }).populate(
      "createdBy"
    );
    const boards = await Board.find({ createdBy: req.user._id }).populate(
      "createdBy"
    );
    //joining notes and boards
    const notesandboards = notes.concat(boards);
    //Sorting based on updated time
    const sortednotesandboards = notesandboards.sort((a, b) => {
      return b.updatedAt - a.updatedAt;
    });

    res.json({ sortednotesandboards });
  } catch (error) {
    console.log(error);
  }
};

//Get Recommended Notes and Boards
exports.getRecommendedNotesAndBoardsController = async (req, res) => {
  try {
    //Fetching notes and boards
    const notes = await Note.find({ createdBy: req.user._id }).populate(
      "createdBy"
    );
    const boards = await Board.find({ createdBy: req.user._id }).populate(
      "createdBy"
    );
    //joining notes and boards
    const notesandboards = notes.concat(boards);
    //Sorting based on updated time
    let sortednotesandboards = notesandboards.sort((a, b) => {
      return b.updatedAt - a.updatedAt;
    });

    sortednotesandboards = sortednotesandboards.slice(0, 2);

    res.json({ sortednotesandboards });
  } catch (error) {
    console.log(error);
  }
};
