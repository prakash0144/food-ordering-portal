const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://prakashsangave:prakashEcommerce@cluster0.v8mshjc.mongodb.net/')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    
const foodItemsRouter = require('../backend/routes/fooditems');
app.use('/api/food-items', foodItemsRouter);

// ========//// LOCAL STORAGE DATA FETCHING START \\\\==========

// app.get('/api/menu', (req, res) => {
//   const filePath = path.join(__dirname, 'data', 'menu.json');
//   fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//           res.status(500).send('Error reading data');
//           return;
//       }
//       res.json(JSON.parse(data));
//   });
// });

// ========//// LOCAL STORAGE DATA FETCHING START \\\\==========

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
