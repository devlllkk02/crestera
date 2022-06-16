//Imports
const Folder = require('../models/Folder');//Folder Model
const ResponseService = require('../utils/ResponseService'); // Response service

// Get All Folders when mother folder !== null
exports.getAllByID = (async (req, res) => {
    const folderId = req.params.id;
    const uid = req.query.uid;
    Folder.find({ motherFolder: folderId , addedBy : uid }, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
});

// Get All Folders when mother folder == null
exports.getAll = (async (req, res) => {
    const uid = req.query.uid;
    Folder.find({ motherFolder: null , addedBy : uid }, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
});