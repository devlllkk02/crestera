// ------ Note Controller  ------
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

//Modles
const Note = mongoose.model("Note");
const User = mongoose.model("User");

//Create Note
exports.createNoteController = async (req, res) => {
  try {
    const { fileName } = req.body;

    //Checking Empty Fields
    if (!fileName) {
      return res.status(401).json({ error: "Please enter a valid note name!" });
    }

    const note = new Note({
      fileName: fileName,
      createdBy: req.user,
    });

    const savedNote = await note.save();
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $inc: { noteCount: 1 },
      },
      { new: true }
    );

    res.json({
      message: "Note created succesfully!",
      note: savedNote,
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

//Get Notes Of A User
exports.getNotesController = (req, res) => {
  Note.find({ createdBy: req.user._id })
    .populate("createdBy")
    .then((notes) => {
      notes = notes.sort((a, b) => {
        return b.updatedAt - a.updatedAt;
      });
      res.json({ notes: notes });
    })
    .catch((error) => {
      console.log(error);
    });
};

//Get Recommended Notes of A User
exports.getRecommendedNotesController = async (req, res) => {
  try {
    //Fetching notes and boards
    const notes = await Note.find({ createdBy: req.user._id }).populate(
      "createdBy"
    );

    //Sorting based on updated time
    let sortednotes = notes.sort((a, b) => {
      return b.updatedAt - a.updatedAt;
    });

    sortednotes = sortednotes.slice(0, 10);

    res.json({ sortednotes });
  } catch (error) {
    console.log(error);
  }
};

//Get One Note
exports.getSingleNoteController = (req, res) => {
  Note.findById(req.params.noteId)
    .populate("createdBy", "-password")
    .then((note) => res.send(note))
    .catch((error) => {
      console.log(error);
      res.status(422).json({ error: "Invalid note id!" });
    });
};

//Update One Note
exports.updateSingleNoteController = (req, res) => {
  Note.findByIdAndUpdate(req.params.noteId, req.body, { new: true }).exec(
    (error, result) => {
      if (error) return res.status(422).json({ error: error });
      else res.send(result);
    }
  );
};

//Delete One Note
exports.deleteSingleNoteController = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.noteId }).exec();

    if (note.createdBy._id.toString() === req.user._id.toString()) {
      const removedNote = await note.remove();
      const updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        {
          $inc: { noteCount: -1 },
        },
        { new: true }
      );
      res.json({
        message: "Note deleted successfully!",
        removedNote: removedNote,
        updatedUser: updatedUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
