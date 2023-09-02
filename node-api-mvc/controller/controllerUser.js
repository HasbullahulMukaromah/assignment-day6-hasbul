// controllers/userController.js
const UserModel = require('../models/modelUser');

class UserController = {
  getAllUsers: (req, res) => {
    res.json(users);
  },
  createUser: (req, res) => {
    const { name, email } = req.body;
    const newUser = new User(users.length, name, email);
    users.push(newUser);
    res.status(201).json(newUser);
  },
  updateUser: (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    users[userId] = new User(userId, name, email);
    res.json(users[userId]);
  },
  deleteUser: (req, res) => {
    const userId = req.params.id;
    const deletedUser = users.splice(userId, 1);
    res.json(deletedUser[0]);
  },
};

module.exports = UserController;
