let mongoose = require('mongoose');

// Import the Schemas
let userSchema = require('./user').schema;
let questionSchema = require('./question').schema;
let answerSchema = require('./answer').schema;
// let voteSchema = require('./vote').schema

// Export the models
exports.User = mongoose.model('users', userSchema);
exports.Question = mongoose.model('questions', questionSchema);
exports.Answer = mongoose.model('answers', answerSchema);
// exports.Vote = mongoose.model('vote'), voteSchema);
