const mongoose = require('../dbConnection');
const userSchema = require('../schemas/userSchema');

const User = mongoose.model('User', userSchema);

class UserModel {
  // async getAllUsers() {
  //   const users = await User.find();
  //   return users;
  // }

  async getUserById(userId) {
    const user = await User.findById(userId);
    return user;
  }

  async createUser(newUser) {
    const createdUser = await User.create(newUser);
    return createdUser;
  }

  async updateUser(userId, updatedUser) {
    const user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
    return user;
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
