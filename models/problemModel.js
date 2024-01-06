const mongoose = require('../dbConnection');
const problemSchema = require('../schemas/problemSchema');
const Problem = mongoose.model('Problem', problemSchema);

class ProblemModel {

    async getProblems(queryObject){
        try{
            return await Problem.find(queryObject).lean();
        }catch (e){
            return e["message"]
        }
    }

    async createProblem(newProblem) {
        try{
            return await Problem.findOneAndUpdate({problemNo: newProblem.problemNo}, newProblem, {
                upsert: true,
                new: true,
                runValidators: true
            });
        }catch (e){
            return e["message"];
        }
    }


}


module.exports = new ProblemModel();
