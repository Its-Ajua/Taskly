const mongoose = require('mongoose');
const User = require('../models/User');
const Organization = require('../models/Organization');

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find().exec();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).exec();
    if (!user) {
      res.status(404).send({ message: 'User not found' });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    if (!user) {
      res.status(404).send({ message: 'User not found' });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id).exec();
    res.status(204).send({ message: 'User deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOrganizations = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const organizations = await Organization.find({ _id: { $in: user.organizations } });
    res.send(organizations);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getOrganizations,
};