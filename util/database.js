const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'MySQL@2023', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;