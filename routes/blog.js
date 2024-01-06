const express = require('express');
const multer = require('multer');
const router = express.Router();
const blogController = require('../controllers/blogController');


router.post('/uploadBlog', blogController.uploadBlog);
router.get('/getAllBlogs', blogController.getAllBlogs);
router.get('/getBlog', blogController.getBlog);


module.exports = router;