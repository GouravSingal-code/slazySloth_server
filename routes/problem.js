const express = require('express');
const multer = require('multer');
const router = express.Router();
const problemController = require('../controllers/problemController');

router.post('/uploadProblem', problemController.uploadProblem);
router.get('/getAllProblems', problemController.getAllProblems);
router.get('/getProblem', problemController.getProblem);

module.exports = router;