let mongoose = require('mongoose');

let factSchema = new mongoose.Schema({
  fact: String
})

let fact = mongoose.model('fact', factSchema);

module.exports = fact;