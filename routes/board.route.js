const express = require('express');
const boardController = require('../controllers/board.controller');

const router = express.Router();

router.post('/', boardController.createBoard);
router.get('/', boardController.getBoards);

module.exports = router;