const mongoose = require("mongoose");

const UserCircleSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    addedOn: {
        type: Date,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    members: [{
        member: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isPending: {
            type: Boolean,
            default: false
        },
    }],

});

module.exports = mongoose.model("UserCircle", UserCircleSchema);
