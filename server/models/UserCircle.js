const mongoose = require("mongoose");

const UserCircleSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: [true, "Please provide a name to the Circle"],
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
