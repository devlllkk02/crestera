// Model imports
const ResponseService = require('./ResponseService'); // Response service

// models
const User = require('../models/User');
const UserCircle = require('../models/UserCircle');
const Board = require('../models/Board');
const Note = require('../models/Note');
const File = require('../models/File');
const Folder = require('../models/Folder');

const Types = require('./Types') // Model types


// Return model by type
function getModelByType(type) {
    switch (type) {
        case Types.USER:
            return User;
        case Types.USERCIRCLE:
            return UserCircle;
        case Types.BOARD:
            return Board;
        case Types.NOTE:
            return Note;
        case Types.FILE:
            return File;
        case Types.FOLDER:
            return Folder;

    }
}

// Return new model instance by type
function createNewModelInstanceByName(type, val) {
    switch (type) {
        case Types.USER:
            return new User(val);
        case Types.USERCIRCLE:
            return new UserCircle(val);
        case Types.BOARD:
            return new Board(val);
        case Types.NOTE:
            return new Note(val);
        case Types.FILE:
            return new File(val);
        case Types.FOLDER:
            return new Folder(val);
    }
}

// Create
exports.create = function (val, type, res) {
    const model = createNewModelInstanceByName(type, val);
    model.save((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
}

// Update by ID
exports.updateById = function (id, val, type, res) {
    const model = getModelByType(type);
    model.findByIdAndUpdate(id, val, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res, "Updated");
    });
}

// Delete by ID
exports.deleteById = function (id, type, res) {
    const model = getModelByType(type);
    model.findByIdAndDelete(id, (err, doc) => {
        ResponseService.generalResponse(err, res, "Deleted");
    });
}

// Soft delete by ID
exports.softDelete = function (id, type, res) {
    const model = getModelByType(type);
    model.findByIdAndUpdate(id, { status: 0 }, (err, doc) => {
        ResponseService.generalResponse(err, res, "Deleted");
    });
}

// Status change by ID
exports.statusChangeById = function (id, type, status, res) {
    const model = getModelByType(type);
    model.findByIdAndUpdate(id, { status }, (err, doc) => {
        ResponseService.generalResponse(err, res, "Status Updated");
    });
}

// Read one by ID
exports.getById = function (id, type, res) {
    const model = getModelByType(type);
    model.findById(id, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
}

/* Read by query
    [X] PAGINATION
    [X] SORTING
    [X] LIMIT
*/
exports.getByQuery = function (query, type, res) {
    const model = getModelByType(type);
    model.find(query, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
}
