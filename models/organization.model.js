const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  name: String,
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;