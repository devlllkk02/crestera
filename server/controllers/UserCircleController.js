//Imports
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
    .populate('members.member','firstName lastName ');

};


exports.getById = function (req, res) {
  UserCircle.findById(req.params.id, (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
  })
  .populate('addedBy', 'firstName lastName')
  .populate('members.member','firstName lastName ');
      
}

//add member
exports.addMember = async function (req, res) {
  const member = {
    member: req.body.members,
    isAdmin: req.body.isAdmin,
    isPending: req.body.isPending,
    isOwner: req.body.isOwner
  };
  UserCircle.findByIdAndUpdate(req.body.id, { $push: { members: member } }, { new: true },(err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    }
  );
};

//update member
// update comment.//to do not working
exports.updateMember = async function (req, res) {
  console.log(req.body)
  UserCircle.update(
      { 'memberss._id': req.body.memberId },
      { $set: { 'members.$.isAdmin': req.body.isAdmin } },
      { new: true }, (err, doc) => {
          ResponseService.generalResponse(err, res, "member updated successfully");
      });
}