const mongoose = require('mongoose');

const subitemSchema = new mongoose.Schema({
  subname: { type: String, required: true },
  name: { type: String, required: true },
  type: {type: String, required: true},
  url: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: Number, required: true }
});

module.exports = subitemSchema;
