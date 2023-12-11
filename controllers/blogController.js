const { isNullOrEmpty } = require('./utils/isNullOrEmpty');
const { responseBody } = require('./utils/responseBody');
const BlogModel = require('../models/blogModel');
const BlogSchema = require('../schemas/blogSchema');

class BlogController {

    async getAllBlogs(){
        try {

            const blogs = await BlogModel.getBlogs();
            if (blogs) {
              res.json(blogs);
            } else {
              res.status(404).json(responseBody('Blogs not found',{}));
            }
          } catch (error) {
            res.status(500).json(responseBody('Internal server error', {}));
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
      if( isNullOrEmpty(req.body.id) || isNullOrEmpty(req.body.author) || isNullOrEmpty(req.body.title) ){
        res.status(404).json(responseBody('Important info is missing' , req.body));
      }
        const blogObject = new BlogSchema({
          id : req.body.id,
          author : req.body.userId,
          title : req.body.title,
          content : req.body.content
        });
        const blog = await BlogModel.updateBlog(blogObject);
        if (user) {
          res.status(201).json({"Blog successfully uploaded"});
        } else {
          res.status(404).json({ error: 'Blog failed to upload' });
        }
      
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateBlog(req, res){
    try {
      if( isNullOrEmpty(req.body.id) || isNullOrEmpty(req.body.author) || isNullOrEmpty(req.body.title) ){
        res.status(404).json(responseBody('Important info is missing' , req.body));
      }
        const blogObject = new BlogSchema({
          id : req.body.id,
          author : req.body.userId,
          title : req.body.title,
          content : req.body.content
        });
        const blog = await BlogModel.updateBlog(req.body.id, blogObject);
        if (user) {
          res.status(201).json({"Blog successfully updated"});
        } else {
          res.status(404).json({ error: 'Blog not found' });
        }
      
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }



}

module.exports = new BlogController();
