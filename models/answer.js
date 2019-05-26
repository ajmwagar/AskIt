let mongoose = require('mongoose');

// Answer model
exports.schema = new mongoose.Schema({
  // Id of user who posted it
  author: String,
  // Content of answer
  content: String,
  // ID of question
  question: String

})
