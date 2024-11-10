const mongoose = require('mongoose');

// Replace 'yourDatabaseName' with the name of your actual database
const uri = 'mongodb://localhost:27017/error-buddy-data';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;