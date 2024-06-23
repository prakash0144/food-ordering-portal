
const mongoose = require('mongoose');

const foodSubitemSchema = new mongoose.Schema({
  subname: String,
  type: String,
  name: String,
  url: String,
  description: String,
  price: Number,
  rating: Number
});

const foodCategorySchema = new mongoose.Schema({
  name: String,
  image: String,
  subitems: [foodSubitemSchema]
});

module.exports = mongoose.model('FoodCategory', foodCategorySchema);
