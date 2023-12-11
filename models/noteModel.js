const mongoose = require('../dbConnection');
const noteSchema = require('../schemas/noteSchema');

const Note = mongoose.model('Note', noteSchema);

class NoteModel {
}

module.exports = new NoteModel();