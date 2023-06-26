const mysql = require('mysql2');

const pool = mysql.createPool({

    host : 'localhost',
    user: 'root',
    database: 'daily_node',
    password:'v1nCent',
    port: 3307
})

module.exports = pool.promise();