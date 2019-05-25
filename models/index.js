let mongoose = require('mongoose');

// Import the Schemas
let userSchema = require('./user').schema;
let questionSchema = require('./question').schema;
let answerSchema = require('./answer').schema;

// Export the models
exports.User = mongoose.model('users', userSchema);
exports.Question = mongoose.model('questions', questionSchema);
exports.Answer = mongoose.model('answers', answerSchema);
