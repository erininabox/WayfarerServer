const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define article schema here
// any time there is a new schema, mongo automatically appends an id property to that schema

// preiviouslypm had schema embedded, but removed that because of id issues with each article

const ArticleSchema = new Schema({
  title: String,
  subtitle: String,
  author: String,
  images: [],
  content: [],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const CitySchema = new Schema({
  city: String,
  image: String,
  articles: [] 
});

const City = mongoose.model('City', CitySchema);
const Article = mongoose.model('Article', ArticleSchema);

module.exports = {City, Article } 