//Imports
const Folder = require('../models/Folder');//Folder Model
const ResponseService = require('../utils/ResponseService'); // Response service



// Get All Folders
exports.getAll = (async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const _count = await Folder.countDocuments();
    const totalPages = Math.ceil(_count / limit);

    Folder.find((err, doc) => {
        const newPayload = {
            docs: doc,
            totalPages: totalPages,
            totalpost: _count
        }
        ResponseService.generalPayloadResponse(err, newPayload, res);
    }).sort({ addedOn: -1 })
        .skip(page * limit).limit(limit);
});

