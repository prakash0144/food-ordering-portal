// models/FoodCategory.js
const mongoose = require('mongoose');

const subItemSchema = new mongoose.Schema({
  subname: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true }
});

const foodCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  subitems: [subItemSchema]
});

module.exports = mongoose.models.FoodCategory || mongoose.model('FoodCategory', foodCategorySchema);
