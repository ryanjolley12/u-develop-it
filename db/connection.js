const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    //username
    user: 'root',
    password: 'crouton97',
    database: 'election'
});

module.exports = db;