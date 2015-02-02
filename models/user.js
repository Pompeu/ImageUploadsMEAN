// file: models/user.js - created at 2015-02-01, 04:56
function userHandler() {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var schema = null;

  schema = new Schema({
    name : {type : String, required :true},
    foto : {type : Buffer }
  });	

  return mongoose.model('User', schema);
}
module.exports = exports = userHandler();
