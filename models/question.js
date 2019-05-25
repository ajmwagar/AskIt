let mongoose = require('mongoose');

// Question model
exports.schema = new mongoose.Schema({
  // Id of user who posted it
  author: String,
  // Title of the question
  title: String,
  // Content of answer
  content: String,
  // IDs of answers
  answers: [String]
})
