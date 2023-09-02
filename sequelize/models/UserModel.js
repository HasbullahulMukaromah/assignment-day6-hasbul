const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
  nama: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = Book;
