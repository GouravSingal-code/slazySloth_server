const mongoose = require('../dbConnection');
const blogSchema = require('../schemas/blogSchema');

const Blog = mongoose.model('Blog', blogSchema);

class BlogModel {
}

module.exports = new BlogModel();
