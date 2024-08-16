const Task = require('../models/task.model');
const Organization = require('../models/organization.model');
const User = require('../models/user.model');

const createTask = async (req, res) => {
  const { title, description, organizationId, assignedToId, dueDate } = req.body;
  const task = new Task({ title, description, organization: organizationId, assignedTo: assignedToId, dueDate });
  await task.save();
  res.send({ message: 'Task created successfully' });
};

const getTasks = async (req, res) => {
  const organizationId = req.params.organizationId;
  const tasks = await Task.find({ organization: organizationId });
  res.send(tasks);
};

const updateTask = async (req, res) => {
  const taskId = req.params.taskId;
  const { title, description, assignedToId, dueDate, status } = req.body;
  const task = await Task.findByIdAndUpdate(taskId, { title, description, assignedTo: assignedToId, dueDate, status }, { new: true });
  res.send({ message: 'Task updated successfully' });
};

const deleteTask = async (req, res) => {
  const taskId = req.params.taskId;
  await Task.findByIdAndRemove(taskId);
  res.send({ message: 'Task deleted successfully' });
};

module.exports = { createTask, getTasks, updateTask, deleteTask };