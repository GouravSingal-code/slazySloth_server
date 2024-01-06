const mongoose = require('mongoose');
const {Schema} = mongoose;

const problemSchema = new Schema({
    problemNo: {
        type : String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
      },
    pdfUrl: {
        type: String, // Store PDF content as a Buffer
        required: true
    }
})

module.exports = problemSchema