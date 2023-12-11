const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Define routes and their corresponding controller actions
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/register', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;