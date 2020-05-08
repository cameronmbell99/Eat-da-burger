// Import MySQL connection.
var connection = require("connection.js");

function printVals(vals){
    var arr = [];

    for(var i = 0; i < vals.length; i++){
        arr.push(vals[i].toString());
    }

    return arr.toString();
}

function obj2Sql(ob) {
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
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
selectAll: function(tableInput, res){
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err,result){
        if(err) throw err;
        res(result);
    });
},
insertOne: function(table, cols, vals, res){
    var queryString = "INSERT INTO " + table;

    queryString += " (" + cols.toString() + ") ";
    queryString += "VALUES (" + printVals(vals) + ")" ;

    console.log(queryString);

    connection.query(queryString, function(err,result){
        if(err) throw err;
        res(result);
    });
},
updateOne: function(table, objVals, condition, res){
    var queryString = "UPDATE " + table;

    queryString += " SET " + obj2Sql(objVals); + " WHERE " + condition;

    console.log(queryString);

    connection.query(queryString, function(err, result){
        if(err) throw err;
        res(result);
    })
}
};

module.exports = orm;