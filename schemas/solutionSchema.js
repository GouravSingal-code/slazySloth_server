const mongoose = require('mongoose');
const {Schema} = mongoose;
const linkSchema = require('./linkSchema');

const solutionSchema = new Schema({
    id : {
       type : String,
       required : true,
       unique : true 
    }
    problemId : {
       type : String,
       required : true
    },
    userId: {
       type: String,
       required: true
    },
    solutionLink:{
        type:linkSchema,
        required:true,
        unique:true
    }
})

module.exports = userSchema