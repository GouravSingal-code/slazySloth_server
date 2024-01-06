const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');


router.post('/uploadComment', forumController.uploadComment);
router.get('/getAllComments' , forumController.getAllComments);


module.exports = router;