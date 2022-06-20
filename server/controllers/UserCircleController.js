//Imports
const User = require('../models/User');
const UserCircle = require('../models/UserCircle');
const ResponseService = require('../utils/ResponseService'); // Response service

exports.create = async (req, res) => {
  new UserCircle(req.body).save((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
};

// Get All Circles
exports.getAll = async (req, res) => {
  UserCircle.find((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  })
    .sort({ addedOn: -1 })
    .populate('addedBy', 'firstName lastName')
    .populate('members.member', 'firstName lastName ');
};

exports.getById = function (req, res) {
  UserCircle.findById(req.params.id, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  })
    .populate('addedBy', 'firstName lastName')
    .populate('members.member', 'firstName lastName image');
};

//add member
exports.addMember = async function (req, res) {
  const member = {
    member: req.body.members,
    isAdmin: req.body.isAdmin,
    isPending: req.body.isPending,
    isOwner: req.body.isOwner,
  };
  UserCircle.findByIdAndUpdate(
    req.body.id,
    { $push: { members: member } },
    { new: true },
    (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    }
  );
};

//remove member
exports.removeMember = async function (req, res) {
  const member = {
    member: req.body.members,
  };

  UserCircle.findByIdAndUpdate(
    req.body.id,
    { $pull: { members: member } },
    { new: true },
    (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    }
  );
};

//update member
exports.updateMember = async function (req, res) {
  console.log(req.body);

  UserCircle.updateOne(
    { 'members._id': req.body.memberId },
    { $set: { 'members.$.isAdmin': req.body.isAdmin } },
    { new: true },
    (err, doc) => {
      ResponseService.generalResponse(err, res, 'member updated successfully');
    }
  );
};

//update is pending
exports.updatePeding = async function (req, res) {
  console.log(req.body);

  UserCircle.updateOne(
    { 'members._id': req.body.memberId },
    { $set: { 'members.$.isPending': req.body.isPending } },
    { new: true },
    (err, doc) => {
      ResponseService.generalResponse(err, res);
    }
  );
};

//get users not added to a user circle
exports.getUsersNotAddedToUserCircle = async (req, res) => {
  try {
    const users = await User.find().select('_id');
    const usercircle = await UserCircle.findById(req.params.circleId)
      .populate('members.member')
      .select('members');

    const userIds = [];
    const memberIds = [];
    var filteredIds = [];

    //Getting All User Ids
    users.forEach((user) => {
      userIds.push(user._id.toString());
    });

    //Getting All Member Ids
    usercircle.members.forEach((member) => {
      memberIds.push(member.member._id.toString());
    });

    //Filtering Ids
    filteredIds = userIds.filter((item) => {
      return !memberIds.includes(item);
    });
    const filteredUsers = await User.find({ _id: { $in: filteredIds } });
    // console.log(`User Ids: ${userIds} \nMemeber Ids: ${memberIds} \nFiltered Ids: ${filteredIds}`);
    res.send(filteredUsers);
  } catch (error) {
    console.log(error);
  }
};

// Get notification
exports.getNotification = (async (req, res) => {
  const uid = req.params.id;
  UserCircle.find( { members: { $elemMatch: { member : uid , isPending: "true" } } }, (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
  })
});