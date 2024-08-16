const Notification = require('../models/notification.model');
const User = require('../models/user.model');

const sendNotification = require('./notifier');

const createNotification = async (req, res) => {
  const { text, userId } = req.body;
  const notification = new Notification({ text, user: userId });
  await notification.save();
  sendNotification(text, userId);
  res.send({ message: 'Notification created successfully' });
};
  
const getNotifications = async (req, res) => {
    const userId = req.params.userId;
    const notifications = await Notification.find({ user: userId });
    res.send(notifications);
};
  
const deleteNotification = async (req, res) => {
    const notificationId = req.params.notificationId;
    await Notification.findByIdAndRemove(notificationId);
    res.send({ message: 'Notification deleted successfully' });
};

module.exports = { createNotification, getNotifications, deleteNotification };