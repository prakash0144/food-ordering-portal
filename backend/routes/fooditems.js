// routes/foodItems.js
const express = require('express');
const router = express.Router();
const FoodCategory = require('../models/foodcategory');

// GET all food items
router.get('/', async (req, res) => {
    try {
        const foodItems = await FoodCategory.find();
        res.json(foodItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
