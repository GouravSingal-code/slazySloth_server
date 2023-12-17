const mongoose = require('../dbConnection');
const userSchema = require('../schemas/userSchema');

const User = mongoose.model('User', userSchema);

class UserModel {
  // async getAllUsers() {
  //   const users = await User.find();
  //   return users;
  // }

  async getUserByQueryObject(queryObject) {
    try{
      const user = await User.findOne(queryObject);
      return user;
    }catch (e){
      console.log(e);
      return e["message"];
    }
  }

  async createUser(newUser) {
    try{
      console.log(newUser);
      const createdUser = await User.create(newUser);
      console.log(createdUser);
      return createdUser;
    }catch (e){
      return e["message"];
    }
  }

  async updateUser(userId, updatedUser) {
    try{
      const newUser = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
      return newUser;
    }catch (e){
      return e["message"];
    }
  }

  async deleteUser(userId) {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  }

  async updateName(userId, name){

  }

  async updateEmail(userId, email){

  }

  async updatePassword(userId, password){

  }

  async updateImage(userId, image){

  }

  async updateLinks(userId , links){
    
  }
}

module.exports = new UserModel();
