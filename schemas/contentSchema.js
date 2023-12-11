const mongoose = require('mongoose');
const {Schema} = mongoose;

const contentSchema = new Schema({
    text : {
       type : String,
    },
    imageData: {
        type: Buffer,
        required: true,
    }
})

module.exports = contentSchema