const mongoose = require('mongoose');
const commentSchema = require('./commentSchema.js')
const {Schema} = mongoose;

const discussionSchema = new Schema({
    problemNo: {
        type: String,
        required: true,
    },
    comments : {
        type: [commentSchema],
        default : []
    }
})

module.exports = discussionSchema