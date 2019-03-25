const mysql = require("mysql");
const keys = require("./keys");
require("dotenv").config();

const connection = mysql.createConnection(keys.mysql);

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
     }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
