const { isNullOrEmpty } = require('./utils/isNullOrEmpty');
const { responseBody } = require('./utils/responseBody');
const ProblemModel = require('../models/problemModel');
const ProblemSchema = require('../schemas/problemSchema');

class ProblemController {
  async uploadProblem(req, res){
    try {
      if( isNullOrEmpty(req.body.id) || isNullOrEmpty(req.body.title) || isNullOrEmpty(req.body.content) ){
        res.status(404).json(responseBody('Important info is missing' , req.body));
      }

      const problemObject = new ProblemSchema({
        id : req.body.id,
        title : req.body.title,
        content : req.body.content
      });
  
        const problem = await ProblemModel.uploadProblem(problemObject);
        if (problem) {
          res.status(201).json(responseBody("Problem successfully uploaded" , problem));
        } else {
          res.status(404).json( responseBody('Problem failed to upload',{}));
        }
      
    } catch (error) {
      res.status(500).json(responseBody('Internal server error', {}));
    }
  }
}

module.exports = new NoteController();
