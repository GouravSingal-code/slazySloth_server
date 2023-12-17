const { isNullOrEmpty } = require('../utils/isNullOrEmpty.js');
const { responseBody } = require('../utils/responseBody.js');
const UserModel = require('../models/usersModel');


class UsersController {

  async getUser(req, res) {
    try {
      const queryObject = req.body;
      const user = await UserModel.getUserByQueryObject(queryObject);
      if (user) {
        if (user.hasOwnProperty("password")) {
          delete user["password"];
        }
        res.status(201).json(responseBody("200","user is present",user));
      } else {
        res.status(404).json(responseBody("404", "User not found", {}));
      }
    } catch (error) {
      res.status(500).json(responseBody("500","Internal server error", {}));
    }
  }

  async createUser(req, res) {
    try {
      const newUser = req.body;
      const createdUser = await UserModel.createUser(newUser);
      if (createdUser.hasOwnProperty("password")) {
        delete createdUser["password"];
      }
      res.status(201).json(responseBody('200',"user successfully created", createdUser));
    } catch (error) {
      res.status(500).json(responseBody('500','Internal server error', error));
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

  async updateUser(req, res){
    try {
      const oldUser = req.body;
      const newUser = await UserModel.updateUser({_id:oldUser._id}, {$set:oldUser});
      if (newUser.hasOwnProperty("password")) {
        delete newUser["password"];
      }
      console.log(newUser);
      res.status(201).json(responseBody('200',"user successfully updated", newUser));
    } catch (error) {
      res.status(500).json(responseBody('500','Internal server error', error));
    }
  }



}

module.exports = new UsersController();
