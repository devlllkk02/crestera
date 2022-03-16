//Imports
const File = require("../models/File"); //File Model
const ResponseService = require("../utils/ResponseService"); // Response service



// Get All Files
exports.getAll = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const _count = await File.countDocuments();
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
    .populate('addedBy', 'firstName lastName')
    .populate('members.member', 'firstName lastName')
    .populate('circles.circle', 'name')
    .skip(page * limit)
    .limit(limit);
};
