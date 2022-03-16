const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    addedOn: {
        type: Date,
    },
    content: {
        type: String,
    },
    thumbnail: {
        type: String,
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
        canEdit: {
            type: Boolean,
            default: false
        },
    }],
    circles: [{
        circle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserCircle'
        },
        canEdit: {
            type: Boolean,
            default: false
        },
    }],

});

module.exports = mongoose.model("Note", NoteSchema);
