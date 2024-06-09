const mongoose = require('mongoose');
const subitemSchema = require('../models/subitem');

const foodCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  subitems: [subitemSchema]
});

const FoodCategory = mongoose.model('FoodCategory', foodCategorySchema);

module.exports = FoodCategory;
