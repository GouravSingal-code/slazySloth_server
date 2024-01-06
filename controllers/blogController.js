const { isNullOrEmpty } = require('../utils/isNullOrEmpty');
const { responseBody } = require('../utils/responseBody');
const BlogModel = require('../models/blogModel');
const BlogSchema = require('../schemas/blogSchema');
const UserModel = require("../models/usersModel");
const {generateS3Url} = require('../s3');


class BlogController {

    async getAllBlogs(req, res){
        try {
            console.log(req.query);
            const blogs = await BlogModel.getBlogs({author:req.query.email});
            if (blogs) {
              res.status(201).json(responseBody('200','Successfully fetch all blogs',blogs));
            } else {
              res.status(404).json(responseBody('404','Blogs not found',{}));
            }
          } catch (error) {
            res.status(500).json(responseBody('500','Internal server error', {}));
        }       
    }


    async getBlog(req, res){
        try {
            const blog = await BlogModel.getBlogs({_id:req.query.id});
            if (blog) {
                res.status(201).json(responseBody('200','Successfully fetch the blog',blog));
            } else {
                res.status(404).json(responseBody('404','Blog not found',{}));
            }
        } catch (error) {
            res.status(500).json(responseBody('500','Internal server error', {}));
        }
    }

    
    async getAllBlogsPerUser(req, res){
        try {
            const userId = req.params.userId;
            if( isNullOrEmpty(userId) ){
              res.status(404).json(responseBody('User id is empty or null',{})); 
            }
            const blogs = await BlogModel.getBlogsByUserId(userId);
            if (blogs) {
              res.json(blogs);
            } else {
              res.status(404).json(responseBody('Blogs not found for give user',{}));
            }
          } catch (error) {
            res.status(500).json(responseBody('Internal server error', {}));
        }
    }
    
    async getBlogPerUser(req, res){
        try {
            const userId = req.params.userId;
            const blogId = req.params.id;
            if( isNullOrEmpty(userId) || isNullOrEmpty(blogId) ){
              res.status(404).json(responseBody('User id or blog id is empty or null',{})); 
            }
            const blog = await BlogModel.getBlogByUserIdAndNoteId(userId, blogId);
            if (blog) {
              res.json(blog);
            } else {
              res.status(404).json(responseBody('Blog not found for give user',blog));
            }
          } catch (error) {
            res.status(500).json(responseBody('Internal server error', {}));
        }
    }

  async uploadBlog(req, res){
      try {
          const newBlog = req.body;
          for(const element of newBlog.content) {
              element.imageUrl = await generateS3Url();
          }
          console.log(newBlog);
          const createdBlog = await BlogModel.createBlog(newBlog);
          res.status(201).json(responseBody('200',"blog successfully updated", createdBlog));
      } catch (error) {
          res.status(500).json(responseBody('500','Internal server error', error));
      }
  }



}

module.exports = new BlogController();
