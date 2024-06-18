const express = require('express');
const router = express.Router();
const Food = require('../models/admin'); // Assuming your model file is named Food.js and located in models directory

// POST route to add a new food category with subitems
router.post('/add-food', async (req, res) => {
  const { name, image, subitems } = req.body;
  
  if (!name || !image || !subitems || subitems.length === 0) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create a new Food document using Mongoose model
    const newFood = new Food({
      name,
      image,
      subitems
    });

    // Save the new food category to the database
    await newFood.save();

    res.status(201).json({ message: 'Food item added successfully', data: newFood });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding food item' });
  }
});

module.exports = router;
