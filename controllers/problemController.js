const { isNullOrEmpty } = require('../utils/isNullOrEmpty');
const { responseBody } = require('../utils/responseBody');
const ProblemModel = require('../models/problemModel');
const ForumModel = require('../models/forumModel');
const {generateS3Url} = require('../s3');


class ProblemController {

  async getProblem(req, res){
    try {
      const problem = await ProblemModel.getProblems({problemNo:req.query.pNo});
      if (problem) {
        res.status(201).json(responseBody('200','Successfully fetch a problem',problem));
      } else {
        res.status(404).json(responseBody('404','Problem not found',{}));
      }
    } catch (error) {
      res.status(500).json(responseBody('500','Internal server error', {}));
    }
  }

  async getAllProblems(req, res){
    try {
      const problems = await ProblemModel.getProblems({});
      if (problems) {
        res.status(201).json(responseBody('200','Successfully fetch the problems',problems));
      } else {
        res.status(404).json(responseBody('404','Problems not found',{}));
      }
    } catch (error) {
      res.status(500).json(responseBody('500','Internal server error', {}));
    }
  }

  async uploadProblem(req, res){
    try {
      const newProblem = req.body;
      newProblem.pdfUrl = await generateS3Url();
      const createdProblem = await ProblemModel.createProblem(newProblem);

      const formObject = {
        problemNo:newProblem.problemNo,
        comments: []
      }
      await ForumModel.createForum(formObject);
      res.status(201).json(responseBody('200',"Problem successfully updated", createdProblem));
    } catch (error) {
      res.status(500).json(responseBody('500','Internal server error', error));
    }
  }

}

module.exports = new ProblemController();
