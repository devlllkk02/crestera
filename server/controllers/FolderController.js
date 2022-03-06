const Folder = require('../models/Folder');

exports.createNew = (req, res, next) => {
    res.send('create new folder route');
};

exports.getAll = (req, res, next) => {
    res.send('get all folders routes');
};

exports.updateById = (req, res, next) => {
    res.send('update folder route');
};

exports.deleteById = (req, res, next) => {
    res.send('delete folder route');
};