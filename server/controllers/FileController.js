//Imports
const File = require("../models/File"); //File Model
const ResponseService = require("../utils/ResponseService"); // Response service

// Create New File
exports.createNew = (req, res) => {
  let newfile = new File(req.body);
  newfile.save((err) => {
    ResponseService.generalResponse(err, res, "newfile created successfully");
  });
};

// Get All Files
exports.getAll = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const _count = awaitFile.countDocuments();
  const totalPages = Math.ceil(_count / limit);

  File.find((err, doc) => {
    const newPayload = {
      docs: doc,
      totalPages: totalPages,
      totalpost: _count,
    };
    ResponseService.generalPayloadResponse(err, newPayload, res);
  })
    .sort({ addedOn: -1 })
    .skip(page * limit)
    .limit(limit);
};

// Update a File
exports.updateById = async (req, res) => {
  File.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, doc) => {
      ResponseService.generalPayloadResponse(
        err,
        doc,
        res,
        "file updated successfully"
      );
    }
  );
};

// Delete a File
exports.deleteById = async (req, res, next) => {
  File.findByIdAndRemove(
    req.params.id,
    {
      $set: req.body,
    },
    (err, doc) => {
      ResponseService.generalPayloadResponse(
        err,
        doc,
        res,
        "file deleted successfully"
      );
    }
  );
};
