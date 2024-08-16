const express = require('express');
const router = express.Router();
const { createComment, getComments, updateComment, deleteComment } = require('../comment.controller');

router.post('/', createComment);
router.get('/:taskId', getComments);
router.put('/:commentId', updateComment);
router.delete('/:commentId', deleteComment);

module.exports = router;