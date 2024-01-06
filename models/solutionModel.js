const mongoose = require('../dbConnection');
const solutionSchema = require('../schemas/solutionSchema');
const Solution = mongoose.model('Solution', solutionSchema);

class SolutionModel {

    async getSolutions(queryObject){
        try{
            return await Solution.find(queryObject).lean();
        }catch (e){
            return e["message"]
        }
    }

    async createSolution(newSolution) {
        try{
            return await Solution.findOneAndUpdate({solutionId: newSolution.solutionId}, newSolution, {
                upsert: true,
                new: true,
                runValidators: true
            });
        }catch (e){
            return e["message"];
        }
    }
}

module.exports = new SolutionModel();