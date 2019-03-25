let mysql = require("mysql");
require("dotenv").config();

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "catherinemysql",
    database: "burgers_db"
});

// WHY DOES THIS NOT WORK??
// let connection = mysql.createConnection({
//     host: process.env.MYSQLHOST,
//     user: process.env.MYSQLUSER,
//     port: process.env.MYSQLPORT,
//     password: process.env.MYSQLPWD,
//     database: process.env.MYSQL
// });

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
