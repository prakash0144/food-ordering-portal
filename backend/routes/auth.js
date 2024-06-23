const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure the correct path to your User model
const router = express.Router();

// User registration route
router.post('/register', async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ msg: 'Please provide all fields' });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      mobile,
      password: hashedPassword
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ msg: 'User registered successfully', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// User login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login request received:", { email, password });

    if (!email || !password) {
      console.log("Missing email or password");
      return res.status(400).json({ msg: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch");
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    console.log("User authenticated successfully");

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log("JWT token generated:", token);

    res.json({ msg: 'Login successful', token });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
