const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: Date
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;