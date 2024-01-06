const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');



router.post('/register', usersController.createUser);
router.post('/login', usersController.getUser);
router.post('/updateUserInfo', usersController.updateUser);

module.exports = router;