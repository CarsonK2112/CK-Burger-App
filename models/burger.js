var orm = require("../config/orm.js");

var sandwich = {
  selectAll: function(cb) {
    orm.selectAll("*", "burgers", function(res) {
      cb(res);
      console.log("burgers")
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("sandwich", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.update("sandwich", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = sandwich;