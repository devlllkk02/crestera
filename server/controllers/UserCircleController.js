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
  };
  UserCircle.findByIdAndUpdate(req.body.id, { $push: { members: member } }, { new: true },(err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    }
  );
};
