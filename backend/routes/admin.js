
// ROUTES

// routes/admin.js
const express = require('express');
const router = express.Router();
const FoodCategory = require('../models/FoodCategory');

// POST endpoint to add a new food item
router.post('/add-food', async (req, res) => {
  const { name, image, subitems } = req.body;
  
  try {
    const newCategory = new FoodCategory({ name, image, subitems });
    await newCategory.save();
    res.status(201).send('Food item added successfully');
  } catch (error) {
    res.status(400).send('Error adding food item');
  }
});

// Update food category
router.put('/update-food/:id', async (req, res) => {
  const { id } = req.params;
  const { name, image, subitems } = req.body;

  if (!name || !image || !subitems) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const updatedCategory = await FoodCategory.findByIdAndUpdate(id, { name, image, subitems }, { new: true });
    if (!updatedCategory) {
      return res.status(404).send('Food category not found');
    }
    res.status(200).send('Food category updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating food category');
  }
});

// Delete food category
router.delete('/delete-food/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await FoodCategory.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).send('Food category not found');
    }
    res.status(200).send('Food category deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting food category');
  }
});

module.exports = router;
