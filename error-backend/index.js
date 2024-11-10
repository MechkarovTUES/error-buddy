const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware to allow all origins
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/errorTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define Error Schema
const errorSchema = new mongoose.Schema({
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Error = mongoose.model('Error', errorSchema);

// Middleware
app.use(express.json());

// Add an error message
app.post('/errors', async (req, res) => {
  try {
    console.log('Adding error:', req.body.message);
    const error = new Error({ message: req.body.message });
    await error.save();
    res.status(201).send(error);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Retrieve all error messages
app.get('/errors', async (req, res) => {
  try {
    console.log('Getting errors');
    const errors = await Error.find().sort({ _id: -1 });
    res.send(errors);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});