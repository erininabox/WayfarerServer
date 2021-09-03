const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  city: String,
  image: String,
  articles: []
});

const City = mongoose.model('City', CitySchema);

module.exports = City;