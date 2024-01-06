const mongoose = require('../dbConnection');
const discussionSchema = require('../schemas/discussionSchema');
const Forum = mongoose.model('Forum', discussionSchema);

class ForumModel {

    async getAllComments(queryObject){
        try{
            return await Forum.find(queryObject).lean();
        }catch (e){
            return e["message"]
        }
    }

    async createComment(problemNo,newComment) {
        try{
            return await Forum.findOneAndUpdate({ problemNo: problemNo },
                { $push: { comments: newComment } } );
        }catch (e){
            return e["message"];
        }
    }

    async createForum(newForum) {
        try{
            return await Forum.findOneAndUpdate({problemNo: newForum.problemNo}, newForum, {
                upsert: true,
                new: true,
                runValidators: true
            });
        }catch (e){
            return e["message"];
        }
    }


}


module.exports = new ForumModel();
