let mongoose = require('mongoose');

// User model
export var User = new mongoose.Schema({
  username: String,
  // List of question IDs
  questions: [String],
  // List of answer IDs
  answers: [String]
})
