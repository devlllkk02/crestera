//Imports
const User = require('../models/User');
const Folder = require('../models/Folder');//Folder Model
const ResponseService = require('../utils/ResponseService'); // Response service

// Get All Folders when mother folder !== null
exports.getAllById = (async (req, res) => {
    const folderId = req.params.id;
    const uid = req.query.uid;
    Folder.find({ motherFolder: folderId  }, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
        .populate('addedBy', 'firstName lastName')
        .populate('motherFolder', 'name')
});

// Get All Folders when mother folder == null
exports.getAll = (async (req, res) => {
    const uid = req.query.uid;
    Folder.find({ motherFolder: null , addedBy : uid }, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
        .populate('addedBy', 'firstName lastName')
        .populate('motherFolder', 'name')
});

// Get All shared Folders 
exports.getAllShare = (async (req, res) => {
  const uid = req.query.uid;
  Folder.find({members: { $elemMatch: { member : uid } } }, (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
  })
      .sort({ addedOn: -1 })
      .populate('addedBy', 'firstName lastName')
      .populate('motherFolder', 'name')
});

//get by id
exports.getById = (async (req, res) => {
    Folder.findById(req.params.id, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .populate('addedBy', 'firstName lastName')
        .populate('motherFolder', 'name')
        .populate('members.member', 'firstName lastName image');
});


//add member
exports.addMember = async function (req, res) {
    const member = {
      member: req.body.members,
      canEdit: req.body.canEdit,
    };
    Folder.findByIdAndUpdate(
      req.body.id,
      { $push: { members: member } },
      { new: true },
      (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
      }
    );
  };

  exports.removeMember = async function (req, res) {
    Folder.findByIdAndUpdate(
      req.body.id,
      { $pull: { "members": {member:req.body.memberId} } },
      { new: true },
      (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
      }
    );
  };

//add circle
exports.addCircle = async function (req, res) {
  const circle = {
    circle: req.body.circles,
    canEdit: req.body.canEdit,
  };
  Folder.findByIdAndUpdate(
    req.body.id,
    { $push: { circles : circle } },
    { new: true },
    (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    }
  );
};

// Get shared folders of user using member
exports.getAllMember = async (req, res) => {
  UserCircle.find( { members: { $elemMatch: { member : req.params.id } }},(err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  })
  .sort({ addedOn: -1 })
  .populate('addedBy', 'firstName lastName')
  .populate('motherFolder', 'name')
};

exports.getUsersNotAddedToFolder = async (req, res) => {
  try {
    const users = await User.find().select('_id');
    const folder = await Folder.findById(req.params.folderId)
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
    folder.members.forEach((member) => {
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