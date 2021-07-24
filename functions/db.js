const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env["MySQLConnection_HOST"],
    user: process.env["MySQLConnection_USER"],
    password: process.env["MySQLConnection_PASSWORD"],
    database: process.env["MySQLConnection_DB"]
});

module.exports = db;