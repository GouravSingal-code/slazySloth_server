const mongoose = require('mongoose');
const {Schema} = mongoose;
const linkSchema = require('./linkSchema');

const solutionSchema = new Schema({
    solutionId : {
        type: String,
        required: true,
        unique : true
    },
    problemNo : {
       type : String,
       required : true,
    },
    userId: {
       type: String,
       required: true
    },
    solutionLink:{
        type:String,
        required:true,
    }
})

module.exports = solutionSchema