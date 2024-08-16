const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  organizationId: mongoose.Schema.Types.ObjectId,
  getOrganizations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }]
});

module.exports = mongoose.model('User', userSchema);