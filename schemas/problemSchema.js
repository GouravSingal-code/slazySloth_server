const mongoose = require('mongoose');
const {Schema} = mongoose;

const problemSchema = new Schema({
    id : {
       type : String,
       required : true,
       unique : true 
    },
    title: {
        type: String,
        required: true
      },
    content: {
        type: Buffer, // Store PDF content as a Buffer
        required: true
    }
})

module.exports = problemSchema