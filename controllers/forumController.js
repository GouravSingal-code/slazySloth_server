const { isNullOrEmpty } = require('../utils/isNullOrEmpty');
const { responseBody } = require('../utils/responseBody');
const ForumModel = require("../models/forumModel");
const ProblemModel = require("../models/problemModel");

class ForumController {

    async getAllComments(req, res){
        try {
            const comments = await ForumModel.getAllComments({problemNo:req.query.pNo});
            if (comments) {
                res.status(201).json(responseBody('200','Successfully fetch all comments',comments));
            } else {
                res.status(404).json(responseBody('404','Comments not found',{}));
            }
        } catch (error) {
            res.status(500).json(responseBody('500','Internal server error', {}));
        }
    }

    async uploadComment(req, res){
        try {
            const problemNo = req.body.problemNo;
            const newComment = req.body.comment;
            const createdComment = await ForumModel.createComment(problemNo, newComment);
            res.status(201).json(responseBody('200',"Comment successfully added", createdComment));
        } catch (error) {
            res.status(500).json(responseBody('500','Internal server error', error));
        }
    }


}

module.exports = new ForumController();
