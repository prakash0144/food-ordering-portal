const mongoose = require('mongoose');

const SubitemSchema = new mongoose.Schema({
  subname: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  subitems: {
    type: [SubitemSchema],
    required: true
  }
});

module.exports = mongoose.model('Food', FoodSchema);
