const { isNullOrEmpty } = require('./utils/isNullOrEmpty.js');
const { responseBody } = require('./utils/responseBody.js');
const UserModel = require('../models/usersModel');


class UsersController {

  async getUserById(req, res) {
    try {
      const userId = req.params.id;
      if( isNullOrEmpty(userId) ){
        res.status(404).json(responseBody('User id is empty or null',{})); 
      }
      
      const user = await UserModel.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json(responseBody('User not found', {}));
      }
    
    } catch (error) {
      res.status(500).json(responseBody('Internal server error', {}));
    }
  }

  // create user with email and password
  async createUser(req, res) {
    try {
      const newUser = req.body;
      console.log(newUser);
      const createdUser = await UserModel.createUser(newUser);
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json(responseBody('Internal server error', {}));
    }
  }

  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      if( isNullOrEmpty(userId) ){
        res.status(404).json(responseBody('User id is empty or null',{})); 
      }
      const deletedUser = await UserModel.deleteUser(userId);
      if (deletedUser) {
        res.json(deletedUser);
      } else {
        res.status(404).json(responseBody('User not found',{} ));
      }
    } catch (error) {
      res.status(500).json(responseBody('Internal server error',{} ));
    }
  }

  async updateName(req, res){
    try {
      const userId = req.body.id;
      if( isNullOrEmpty(userId) ){
        res.status(404).json(responseBody('User id is empty or null',{})); 
      }
  
        const user = await UserModel.updateName(userId, req.body.name);
        if (user) {
          res.status(201).json(responseBody("User name successfully updated" , user));
        } else {
          res.status(404).json( responseBody('User not found',{}));
        }
      
    } catch (error) {
      res.status(500).json(responseBody('Internal server error', {}));
    }
  }

  async updateEmail(req, res){
    try {
      const userId = req.body.id;
      if( isNullOrEmpty(userId) ){
        res.status(404).json(responseBody('User id is empty or null',{})); 
      }
  
        const user = await UserModel.updateEmail(userId, req.body.email);
        if (user) {
          res.status(201).json(responseBody("User email successfully updated" , user));
        } else {
          res.status(404).json( responseBody('User not found',{}));
        }
      
    } catch (error) {
      res.status(500).json(responseBody('Internal server error', {}));
    }
  }

  async updatePassword(req, res){
    try {
      const userId = req.body.id;
      if( isNullOrEmpty(userId) ){
        res.status(404).json(responseBody('User id is empty or null',{})); 
      }
  
        const user = await UserModel.updatePassword(userId, req.body.password);
        if (user) {
          res.status(201).json(responseBody("User password successfully updated" , user));
        } else {
          res.status(404).json( responseBody('User not found',{}));
        }
      
    } catch (error) {
      res.status(500).json(responseBody('Internal server error', {}));
    }
  }

  async updateImage(req, res){
    try {
      const userId = req.body.id;
      if( isNullOrEmpty(userId) ){
        res.status(404).json(responseBody('User id is empty or null',{})); 
      }

        const user = await UserModel.updatePic(userId, req.body.pic);
        if (user) {
          res.status(201).json(responseBody("User pic successfully updated" , user));
        } else {
          res.status(404).json( responseBody('User not found',{}));
        }
      
    } catch (error) {
      res.status(500).json(responseBody('Internal server error', {}));
    }
  }

  async addOrUpdateLink(req, res){
    try {
      const userId = req.body.id;
      if( isNullOrEmpty(userId) ){
        res.status(404).json(responseBody('User id is empty or null',{})); 
      }

        const user = await UserModel.updateLinks(userId, req.body.links);
        if (user) {
          res.status(201).json(responseBody("User links successfully updated" , user));
        } else {
          res.status(404).json( responseBody('User not found',{}));
        }
      
    } catch (error) {
      res.status(500).json(responseBody('Internal server error', {}));
    }
  } 

}

module.exports = new UsersController();
