const Board = require('../models/board.model');

exports.createBoard = async (req, res) => {
  const { name } = req.body;
  const board = new Board({ name, organizationId: req.user.organizationId });
  await board.save();
  res.send(board);
};

exports.getBoards = async (req, res) => {
  const boards = await Board.find({ organizationId: req.user.organizationId });
  res.send(boards);
};