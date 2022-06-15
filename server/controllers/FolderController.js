//Imports
const Folder = require('../models/Folder');//Folder Model
const ResponseService = require('../utils/ResponseService'); // Response service

// Get All Folders when mother folder !== null
exports.getAllByID = (async (req, res) => {
    const folderId = req.params.id;
    Folder.find({ motherFolder: folderId }, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
});

// Get All Folders when mother folder == null
exports.getAll = (async (req, res) => {
    Folder.find({ motherFolder: null  }, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
});