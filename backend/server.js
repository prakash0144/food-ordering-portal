const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file

const adminRoutes = require('./routes/admin');
// const authRoutes = require('./routes/auth');
const foodItemsRouter = require('./routes/fooditems');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/admin', adminRoutes);
// app.use('/auth', authRoutes);
app.use('/api/food-items', foodItemsRouter);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
