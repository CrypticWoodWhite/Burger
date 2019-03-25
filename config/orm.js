const connection = require("../config/connection");


// function to print question marks for SQL queries
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
            }
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// object that contains all SQL functions
const orm = {
    // function to select all
    selectAll: function(table, cb) {
        let queryStr = "SELECT * FROM " + table + ";";
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    },

    // function to insert new row into table
    insertOne: function(table, cols, vals, cb) {
        let queryStr = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ")";
    
        connection.query(queryStr, vals, function(err, result) {
          if (err) throw err;    
          cb(result);
        });
    },

    // function to update one row in table
    updateOne:  function(table, objColVals, cond, cb) {
        let queryStr = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + cond;
    
        connection.query(queryStr, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;