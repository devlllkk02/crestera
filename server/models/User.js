const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    bio: String,
    image: String,
    email: {
        type: String,
        index: true
    },
    mobile_no: {
        type: String,
        index: true
    },
    password: String,
    dob: Date,
    gender: String,
    last_login: Date,
});

module.exports = mongoose.model('User', Schema);