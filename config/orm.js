var connection = require("./connection.js");

var orm = {
    selectAll: function(whatToSelect, tableInput, cb) { 
      console.log("testing")
        var queryString = "SELECT "+whatToSelect+" FROM "+tableInput;
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result)
        });
      },
      insertOne: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    
        console.log(queryString);
    
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
      updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
        var queryString = "SELECT ?? FROM ?? AS tOne";
        queryString += " LEFT JOIN ?? AS tTwo";
        queryString += " ON tOne.?? = tTwo.??";
    
        console.log(queryString);
    
        connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
          err,
          result
        ) {
          if (err) throw err;
          console.log(result);
        });
      }
}

module.exports = orm;