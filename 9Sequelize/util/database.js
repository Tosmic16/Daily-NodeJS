const Sequelize = require('sequelize');

const sequelize = new Sequelize('daily_node', 'root', 'v1nCent',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3307
})

module.exports = sequelize;