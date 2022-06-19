//Imports
const Folder = require('../models/Folder');//Folder Model
const ResponseService = require('../utils/ResponseService'); // Response service

// Get All Folders when mother folder !== null
exports.getAllById = (async (req, res) => {
    const folderId = req.params.id;
    const uid = req.query.uid;
    Folder.find({ motherFolder: folderId , addedBy : uid }, (err, doc) => {
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

//get by id
exports.getById = (async (req, res) => {

    Folder.findById(req.params.id, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .populate('addedBy', 'firstName lastName')
        .populate('motherFolder', 'name')
});
