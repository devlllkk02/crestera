const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    bio: String,
    image: String,
    email: {
        type: String,
        index: true
    },
    mobileNo: {
        type: String,
        index: true
    },
    password: String,
    dob: Date,
    gender: String,
    lastLogin: Date,
});

module.exports = mongoose.model('User', Schema);