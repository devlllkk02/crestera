//Imports
const File = require("../models/File"); //File Model
const ResponseService = require("../utils/ResponseService"); // Response service


// Get All Files when mother folder !== null
exports.getAllByID = (async (req, res) => {
  const fileId = req.params.id;
  File.find({ motherFolder: fileId }, (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
  })
      .sort({ addedOn: -1 })
});

// Get All Files when mother folder == null
exports.getAll = (async (req, res) => {
  File.find({ motherFolder: null  }, (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
  })
      .sort({ addedOn: -1 })
});