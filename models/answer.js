let mongoose = require('mongoose');

// Answer model
export var Answer = new mongoose.Schema({
  // Id of user who posted it
  poster: String,
  // Content of answer
  content: String,
  // ID of question
  question: String
})
