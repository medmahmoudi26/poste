const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PresSchema = new Schema({
  nom: {type:String, required:true},
  prenom: {type:String, required:true},
  email: {type:String, required:true},
  pass: {type:String, required:true}
});
module.exports = mongoose.model('prest', PresSchema);
