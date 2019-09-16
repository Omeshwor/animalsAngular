var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
}, {timestamps: true });

var Animal = mongoose.model('Animal', AnimalSchema);
module.exports = Animal;

