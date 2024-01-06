const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    upVote : {
        type : Number,
        default : 0
    },
    downVote : {
        type : Number,
        default : 0
    }
})

module.exports = commentSchema