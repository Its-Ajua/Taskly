const notifier = require('node-notifier');

const sendNotification = (text, userId) => {
  const notification = new notifier.Notification({
    title: 'New Notification',
    message: text,
    icon: 'https://example.com/icon.png',
  });
  notification.show();
};

module.exports = sendNotification;