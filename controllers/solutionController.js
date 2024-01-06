const { isNullOrEmpty } = require('../utils/isNullOrEmpty');
const { responseBody } = require('../utils/responseBody');
const SolutionModel = require('../models/solutionModel');

class SolutionController {
    async uploadSolution(req, res){
        try {
            const newSolution = req.body;
            const createdSolution = await SolutionModel.createSolution(newSolution);
            res.status(201).json(responseBody('200',"blog successfully updated", createdSolution));
        } catch (error) {
            res.status(500).json(responseBody('500','Internal server error', error));
        }
    }

    async getSolutions(req,res){
        try {
            const solutions = await SolutionModel.getSolutions({problemNo:req.query.pNo});
            if (solutions) {
                res.status(201).json(responseBody('200','Successfully fetch the solutions',solutions));
            } else {
                res.status(404).json(responseBody('404','Solutions not found',{}));
            }
        } catch (error) {
            res.status(500).json(responseBody('500','Internal server error', {}));
        }
    }


}

module.exports = new SolutionController();
