// ------ Note Controller  ------
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

//Modles
const Note = mongoose.model("Note");

//Create Note
exports.createNoteController = (req, res) => {
  const { fileName, addedOn } = req.body;

  //Checking Empty Fields
  if (!fileName) {
    return res.status(401).json({ error: "Please enter a valid note name!" });
  }

  //Saving note in the database
  const note = new Note({
    fileName: fileName,
    createdBy: req.user,
  });

  note
    .save()
    .then((savedNote) => {
      res.json({ message: "Note created succesfully!", note: savedNote });
    })
    .catch((error) => console.log(error));
};

//Get Notes Of A User
exports.getNotesController = (req, res) => {
  Note.find({ createdBy: req.user._id })
    .populate("createdBy")
    .then((notes) => {
      res.json({ notes: notes });
    })
    .catch((error) => {
      console.log(error);
    });
};
