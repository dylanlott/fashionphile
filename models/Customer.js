//Location.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  customerModel = new Schema({
  name: String,
  joined: {type: Date, default: Date.now},
  status: {type: String, enum: [waiting, pending, done]}
});

module.exports = mongoose.model('Customer', customerModel); 