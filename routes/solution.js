const express = require('express');
const multer = require('multer');
const router = express.Router();
const solutionController = require('../controllers/solutionController');

router.post('/uploadSolution', solutionController.uploadSolution);
router.get('/getSolutions' , solutionController.getSolutions);
module.exports = router;