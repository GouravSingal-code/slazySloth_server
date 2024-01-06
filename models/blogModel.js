const mongoose = require('../dbConnection');
const blogSchema = require('../schemas/blogSchema');
const Blog = mongoose.model('Blog', blogSchema);

class BlogModel {

    async getBlogs(queryObject){
        try{
            return await Blog.find(queryObject).lean();
        }catch (e){
            return e["message"]
        }
    }

    async createBlog(newBlog) {
        try{
            return await Blog.findOneAndUpdate({_id: newBlog._id}, newBlog, {
                upsert: true,
                new: true,
                runValidators: true
            });
        }catch (e){
            return e["message"];
        }
    }

}


module.exports = new BlogModel();
