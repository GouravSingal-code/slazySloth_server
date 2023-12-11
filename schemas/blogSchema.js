const mongoose = require('mongoose');
const contentSchema = require('./contentSchema.js')

const {Schema} = mongoose;

const blogSchema = new Schema({
    id : {
       type : String,
       required : true,
       unique : true 
    },
    title: {
       type: String,
       required: true,
       unique: false
    },
    author: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    content : {
        type: [contentSchema]
        default : []
    }    
    upVote : {
        type : Number,
        default : 0
    }
    downVote : {
        type : Number,
        default : 0
    }
})

module.exports = blogSchema