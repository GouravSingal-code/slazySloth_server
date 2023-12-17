const mongoose = require('mongoose');
const {Schema} = mongoose;

const linkSchema = new Schema({
    tag : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    link : {
        type : String,
     }
})

module.exports = linkSchema