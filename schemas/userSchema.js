const mongoose = require('mongoose');
const {Schema} = mongoose;
const linkSchema = require('./linkSchema.js')

const userSchema = new Schema({
    id : {
       type : String,
       required : true,
       unique : true 
    },
    pic : {
        type : Buffer
    },
    name: {
       type: String,
       required: true,
       unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique:true,
    },
    links:{
        type:[linkSchema],
        default: []
    }
})

module.exports = userSchema