const { isNullOrEmpty } = require('./utils/isNullOrEmpty');
const { responseBody } = require('./utils/responseBody');
const SolutionModel = require('../models/solutionModel');
const SolutionSchema = require('../schemas/solutionSchema');

class SolutionController {
    async getSolutionsPerUser(req, res){
        try {
            const userId = req.params.userId;
            if( isNullOrEmpty(userId) ){
              res.status(404).json(responseBody('User id is empty or null',{})); 
            }
            const solutions = await SolutionModel.getSolutionsPerUserId(userId);
            if (solutions) {
              res.json(solutions);
            } else {
              res.status(404).json(responseBody('Solutions not found for give user',{}));
            }
          } catch (error) {
            res.status(500).json(responseBody('Internal server error', {}));
        }
      }
    
    
      async getSolutionsPerProblem(req, res){
        try {
            const problemId = req.params.problemId;
            if( isNullOrEmpty(problemId) ){
              res.status(404).json(responseBody('Problem id is empty or null',{})); 
            }
            const solutions = await SolutionModel.getSolutionsPerProblemId(problemId);
            if (solutions) {
              res.json(solutions);
            } else {
              res.status(404).json(responseBody('Solutions not found for give problem',{}));
            }
          } catch (error) {
            res.status(500).json(responseBody('Internal server error', {}));
        }
      }
    
      async uploadSolution(req, res){
        try {
            if( isNullOrEmpty(req.body.id) || isNullOrEmpty(req.body.userId) || isNullOrEmpty(req.body.problemId) || isNullOrEmpty(req.body.solutionLink) ){
              res.status(404).json(responseBody('Important info is missing' , req.body));
            }
              const solutionObject = new SolutionSchema({
                id : req.body.id,
                userId : req.body.userId,
                problemId : req.body.problemId,
                solutionLink : req.body.solutionLink
              });
        
              const solution = await SolutionModel.uploadSolution(solutionObject);
              if (solution) {
                res.status(201).json(responseBody("Solution successfully uploaded" , solution));
              } else {
                res.status(404).json(responseBody('Solution failed to upload',{}));
              }
            
          } catch (error) {
            res.status(500).json(responseBody('Internal server error', {}));
          }
      }
    
      async updateSolution(req, res){
        try {
          if( isNullOrEmpty(req.body.id) || isNullOrEmpty(req.body.userId) || isNullOrEmpty(req.body.problemId) || isNullOrEmpty(req.body.solutionLink) ){
            res.status(404).json(responseBody('Important info is missing' , req.body));
          }
            const solutionObject = new SolutionSchema({
              id : req.body.id,
              userId : req.body.userId,
              problemId : req.body.problemId,
              solutionLink : req.body.solutionLink
            });
      
            const solution = await SolutionModel.updateSolution(req.body.id, solutionObject);
            if (solution) {
              res.status(201).json(responseBody("Solution successfully updated" , solution));
            } else {
              res.status(404).json(responseBody('Solution not found',{}));
            }
          
        } catch (error) {
          res.status(500).json(responseBody('Internal server error', {}));
        }
      }

}

module.exports = new SolutionController();
