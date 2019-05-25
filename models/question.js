let mongoose = require('mongoose');

// Question model
export var questionSchema = new mongoose.Schema({
  // Id of user who posted it
  poster: String,
  // Content of answer
  content: String,
  // IDs of answers
  answers: [String]
})
