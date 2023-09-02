const Sequelize = require('sequelize');

const sequelize = new Sequelize('user', 'root', 'hasbul@99', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
