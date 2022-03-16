const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    bio: {
        type: String,
    },
    image: {
        type: String,
    },
    email: {
        type: String,
        index: true
    },
    mobileNo: {
        type: String,
        index: true
    },
    password: {
        type: String,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
    },
    lastLogin: {
        type: Date,
    },
});

module.exports = mongoose.model('User', Schema);