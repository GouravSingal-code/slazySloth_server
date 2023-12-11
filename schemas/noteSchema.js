const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
    id : {
       type : String,
       required : true,
       unique : true 
    },
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
       type: String,
       required: true,
       unique: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    content : {
        type: String
        required : true,
        unique : true
    }    
})

module.exports = blogSchema