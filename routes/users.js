const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


// router.get('/', usersController.getAllUsers);
//
// router.get('/:id', usersController.getUserById);
router.post('/register', usersController.createUser);
router.post('/login', usersController.getUser);
router.delete('/:id', usersController.deleteUser);
router.post('/updateUserInfo', usersController.updateUser);

module.exports = router;