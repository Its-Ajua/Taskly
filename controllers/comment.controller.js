const Comment = require('../models/comment.model');
const Task = require('../models/task.model');
const User = require('../models/user.model');

const createComment = async (req, res) => {
  const { text, taskId } = req.body;
  const comment = new Comment({ text, task: taskId, user: req.user._id });
  await comment.save();
  res.send({ message: 'Comment created successfully' });
};

const getComments = async (req, res) => {
  const taskId = req.params.taskId;
  const comments = await Comment.find({ task: taskId });
  res.send(comments);
};

const updateComment = async (req, res) => {
  const commentId = req.params.commentId;
  const { text } = req.body;
  const comment = await Comment.findByIdAndUpdate(commentId, { text }, { new: true });
  res.send({ message: 'Comment updated successfully' });
};

const deleteComment = async (req, res) => {
  const commentId = req.params.commentId;
  await Comment.findByIdAndRemove(commentId);
  res.send({ message: 'Comment deleted successfully' });
};

module.exports = { createComment, getComments, updateComment, deleteComment };