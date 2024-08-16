const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  text: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: Date
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;