let mysql = require("mysql");
require("dotenv").config();

let connection = mysql.createConnection({
    host: process.env.JAWSHOST,
    user: process.env.JAWSUSER,
    port: process.env.JAWSPORT,
    password: process.env.JAWSPWD,
    database: process.env.JAWSDB
});

// let connection = mysql.createConnection({
//     host: "y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     user: "ybo9q2j2urrk9wd7",
//     port: 3306,
//     password: "kcnp5ohp9ey12ib9",
//     database: "tl71szcms6st5t01"
// });

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
