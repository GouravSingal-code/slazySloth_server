const mongoose = require('mongoose');
const {Schema} = mongoose;

const contentSchema = new Schema({
    text : {
       type : String,
    },
    imageUrl: {
        type: String,
    },
    textAreaActive: {
        type: Boolean
    }
})

module.exports = contentSchema