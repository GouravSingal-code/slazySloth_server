const mongoose = require('../dbConnection');
const solutionSchema = require('../schemas/solutionSchema');

const Solution = mongoose.model('Solution', solutionSchema);

class SolutionModel {
}

module.exports = new SolutionModel();