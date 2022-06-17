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
    isPublic: {
        type : Boolean,
        default : false
    },
    members: [{
        member: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        isOwner: {
            type: Boolean,
            default: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isPending: {
            type: Boolean,
            default: true
        },
    }],

});

module.exports = mongoose.model("UserCircle", UserCircleSchema);
