const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  name: String,
  organizationId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Board', boardSchema);