const mysql = require('mysql');
const db = mysql.createConnection({
    host: Environment.GetEnvironme,
    user: "root",
    password: "",
    database: "blog_posts"
});

module.exports = db;