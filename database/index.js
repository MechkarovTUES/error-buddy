// backend/index.js
const express = require('express');
const mongoose = require('./db'); // Connect to MongoDB
const ErrorLog = require('./models/error'); // Import Error model
const cors = require('cors');

const app = express();
const PORT = 5000; // Define the port for the backend server

app.use(cors()); // Allow cross-origin requests from your React app
app.use(express.json()); // Parse incoming JSON requests

// Endpoint to add a new error
app.post('/api/errors', async (req, res) => {
  const { message, timestamp } = req.body;
  try {
    const newError = new ErrorLog({ message, timestamp });
    await newError.save();
    res.status(201).json(newError);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to get all errors
app.get('/api/errors', async (req, res) => {
  try {
    const errors = await ErrorLog.find();
    res.json(errors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:27017`);
});
