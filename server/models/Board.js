const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: [true, "Please provide a name to the Board"],
    },
    addedOn: Date,
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

});

module.exports = mongoose.model("Board", BoardSchema);
