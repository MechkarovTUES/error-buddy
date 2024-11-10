// backend/models/Error.js
const mongoose = require('mongoose');

const errorSchema = new mongoose.Schema({
  message: String,
  timestamp: String,
});

const ErrorLog = mongoose.model('ErrorLog', errorSchema);

module.exports = ErrorLog;
