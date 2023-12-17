const mongoose = require('mongoose');
const {Schema} = mongoose;
const linkSchema = require('./linkSchema.js')


const userSchema = new Schema({
    pic : {
        type : Buffer
    },
    name: {
       type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    company: {
        type: String,
    },
    college: {
        type: String,
    },
    designation: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique:true
    },
    links:{
        type:[linkSchema],
        default: []
    }
})

module.exports = userSchema