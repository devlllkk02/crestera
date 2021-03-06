// ------ Share Controller  ------
const mongoose = require("mongoose");
const UserCircle = require("../models/UserCircle");

//Modles
const Note = mongoose.model("Note");
const User = mongoose.model("User");
const Board = mongoose.model("Board");

//?Note
//Get Note Users
exports.shareGetNoteUsersController = async (req, res) => {
  try {
    const { noteId } = req.body;

    let users = await User.find();
    const { createdBy, members } = await Note.findById(noteId).populate(
      "members createdBy"
    );

    //Filtering Existing Members
    members.forEach((member) => {
      users = users.filter((user) => {
        return user._id.toString() != member._id.toString();
      });
    });

    //Filtering Owner
    users = users.filter((user) => {
      return user._id.toString() != createdBy._id.toString();
    });

    res.send({ users });
  } catch (error) {
    console.log(error);
  }
};

//Add user to note
exports.shareAddUserToNoteController = async (req, res) => {
  try {
    const { noteId, userId } = req.body;

    const user = await User.findById(userId);
    const newNote = await Note.findByIdAndUpdate(
      noteId,
      { $addToSet: { members: user } },
      { new: true }
    )
      .populate("members")
      .exec();

    //Updating shared user's note count
    await User.findByIdAndUpdate(
      userId,
      {
        $inc: { noteCount: 1 },
      },
      { new: true }
    );

    res.send({ newNote });
  } catch (error) {
    console.log(error);
  }
};

//Remove user from a note
exports.shareRemoveUserFromNoteController = async (req, res) => {
  try {
    const { noteId, userId } = req.body;

    let { members } = await Note.findById(noteId).populate("members");
    members = members.filter((member) => {
      return member._id.toString() != userId;
    });

    const newNote = await Note.findByIdAndUpdate(
      noteId,
      { members: members },
      {
        new: true,
      }
    )
      .populate("members")
      .exec();

    //Updating shared user's note count
    await User.findByIdAndUpdate(
      userId,
      {
        $inc: { noteCount: -1 },
      },
      { new: true }
    );

    res.send(newNote);
  } catch (error) {
    console.log(error);
  }
};

//Add usercircle to note
exports.shareAddUserCircleToNoteController = async (req, res) => {
  try {
    const { noteId, usercircleId } = req.body;
    const { createdBy: noteCreatedUser } = await Note.findById(noteId).populate(
      "createdBy"
    );
    const usercircle = await UserCircle.findById(usercircleId).populate(
      "members.member"
    );

    var usercirclemembers = [];
    usercircle.members.forEach((item) => {
      usercirclemembers.push(item.member);
    });

    usercirclemembers = usercirclemembers.filter((member) => {
      return member._id.toString() != noteCreatedUser._id.toString();
    });

    const newNote = await Note.findByIdAndUpdate(
      noteId,
      { $addToSet: { members: usercirclemembers } },
      { new: true }
    )
      .populate("members")
      .exec();

    res.send({ newNote });
  } catch (error) {
    console.log(error);
  }
};

//?Board
//Get Board Users
exports.shareGetBoardUsersController = async (req, res) => {
  try {
    const { boardId } = req.body;

    let users = await User.find();
    const { createdBy, members } = await Board.findById(boardId).populate(
      "members createdBy"
    );

    //Filtering Existing Members
    members.forEach((member) => {
      users = users.filter((user) => {
        return user._id.toString() != member._id.toString();
      });
    });

    //Filtering Owner
    users = users.filter((user) => {
      return user._id.toString() != createdBy._id.toString();
    });

    res.send({ users });
  } catch (error) {
    console.log(error);
  }
};

//Add user to board
exports.shareAddUserToBoardController = async (req, res) => {
  try {
    const { boardId, userId } = req.body;

    const user = await User.findById(userId);
    const newBoard = await Board.findByIdAndUpdate(
      boardId,
      { $addToSet: { members: user } },
      { new: true }
    )
      .populate("members")
      .exec();

    //Updating shared user's board count
    await User.findByIdAndUpdate(
      userId,
      {
        $inc: { boardCount: 1 },
      },
      { new: true }
    );

    res.send({ newBoard });
  } catch (error) {
    console.log(error);
  }
};

//Remove user from a board
exports.shareRemoveUserFromBoardController = async (req, res) => {
  try {
    const { boardId, userId } = req.body;

    let { members } = await Board.findById(boardId).populate("members");
    members = members.filter((member) => {
      return member._id.toString() != userId;
    });

    const newBoard = await Board.findByIdAndUpdate(
      boardId,
      { members: members },
      {
        new: true,
      }
    )
      .populate("members")
      .exec();

    //Updating shared user's board count
    await User.findByIdAndUpdate(
      userId,
      {
        $inc: { boardCount: -1 },
      },
      { new: true }
    );

    res.send(newBoard);
  } catch (error) {
    console.log(error);
  }
};

//Add usercircle to board
exports.shareAddUserCircleToBoardController = async (req, res) => {
  try {
    const { boardId, usercircleId } = req.body;
    const { createdBy: boardCreatedUser } = await Board.findById(
      boardId
    ).populate("createdBy");
    const usercircle = await UserCircle.findById(usercircleId).populate(
      "members.member"
    );

    var usercirclemembers = [];
    usercircle.members.forEach((item) => {
      usercirclemembers.push(item.member);
    });

    usercirclemembers = usercirclemembers.filter((member) => {
      return member._id.toString() != boardCreatedUser._id.toString();
    });

    const newBoard = await Board.findByIdAndUpdate(
      boardId,
      { $addToSet: { members: usercirclemembers } },
      { new: true }
    )
      .populate("members")
      .exec();

    res.send({ newBoard });
  } catch (error) {
    console.log(error);
  }
};
