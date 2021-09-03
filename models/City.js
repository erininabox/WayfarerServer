const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  city: String,
  image: String,
});

const City = mongoose.model('City', CitySchema);

module.exports = City;