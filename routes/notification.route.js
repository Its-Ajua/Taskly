const express = require('express');
const router = express.Router();
const { createNotification, getNotifications, deleteNotification } = require('../controllers/notification.controller');

router.post('/', createNotification);
router.get('/:userId', getNotifications);
router.delete('/:notificationId', deleteNotification);

module.exports = router;