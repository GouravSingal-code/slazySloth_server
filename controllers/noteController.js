const { isNullOrEmpty } = require('../utils/isNullOrEmpty');
const { responseBody } = require('../utils/responseBody');
const NoteModel = require('../models/noteModel');
const NoteSchema = require('../schemas/noteSchema');

class NoteController {
  async getAllNotesPerUser(req, res){
    try {
        const userId = req.params.userId;
        if( isNullOrEmpty(userId) ){
          res.status(404).json(responseBody('User id is empty or null',{})); 
        }
        const notes = await NoteModel.getNotesByUserId(userId);
        if (notes) {
          res.json(notes);
        } else {
          res.status(404).json(responseBody('Notes not found for give user',{}));
        }
      } catch (error) {
        res.status(500).json(responseBody('Internal server error', {}));
    }
  }

  async getNotePerUser(req, res){
    try {
        const userId = req.params.userId;
        const noteId = req.params.id;
        if( isNullOrEmpty(userId) || isNullOrEmpty(noteId) ){
          res.status(404).json(responseBody('User id or note id is empty or null',{})); 
        }
        const note = await NoteModel.getNoteByUserIdAndNoteId(userId, noteId);
        if (note) {
          res.json(note);
        } else {
          res.status(404).json(responseBody('Note not found for give user',note));
        }
      } catch (error) {
        res.status(500).json(responseBody('Internal server error', {}));
    }
  }

  async uploadNote(req, res){
    try {
      if( isNullOrEmpty(req.body.id) || isNullOrEmpty(req.body.userId) ){
        res.status(404).json(responseBody('Important info is missing' , req.body));
      }
        const noteObject = new NoteSchema({
          id : req.body.id,
          userId : req.body.userId,
          title : req.body.title,
          content : req.body.content
        });
  
        const note = await NoteModel.uploadNote(noteObject);
        if (note) {
          res.status(201).json(responseBody("Note successfully uploaded" , note));
        } else {
          res.status(404).json( responseBody('Note failed to upload',{}));
        }
      
    } catch (error) {
      res.status(500).json(responseBody('Internal server error', {}));
    }
  }

  async updateNote(req, res){
    try {
      if( isNullOrEmpty(req.body.id) || isNullOrEmpty(req.body.userId) ){
        res.status(404).json(responseBody('Important info is missing' , req.body));
      }
        const noteObject = new NoteSchema({
          id : req.body.id,
          userId : req.body.userId,
          title : req.body.title,
          content : req.body.content
        });
  
        const note = await NoteModel.updateNote(req.body.id, noteObject);
        if (note) {
          res.status(201).json(responseBody("Note successfully updated" , note));
        } else {
          res.status(404).json( responseBody('Note not found',{}));
        }
      
    } catch (error) {
      res.status(500).json(responseBody('Internal server error', {}));
    }
  }
}

module.exports = new NoteController();
