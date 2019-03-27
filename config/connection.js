let mysql = require("mysql");
require("dotenv").config();

let connection = mysql.createConnection({
    host: process.env.JAWSHOST,
    user: process.env.JAWSUSER,
    port: process.env.JAWSPORT,
    password: process.env.JAWSPWD,
    database: process.env.JAWSDB
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
