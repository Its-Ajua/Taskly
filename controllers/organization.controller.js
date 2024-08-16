const Organization = require('../models/organization.model');
const User = require('../models/user.model');

const createOrganization = async (req, res) => {
  const { name, description } = req.body;
  const owner = req.user._id;
  const organization = new Organization({ name, description, owner });
  await organization.save();
  res.send({ message: 'Organization created successfully' });
};

const getOrganizations = async (req, res) => {
  const organizations = await Organization.find({ owner: req.user._id });
  res.send(organizations);
};

const addMember = async (req, res) => {
  const { organizationId, memberId } = req.body;
  const organization = await Organization.findById(organizationId);
  organization.members.push(memberId);
  await organization.save();
  res.send({ message: 'Member added successfully' });
};

module.exports = { createOrganization, getOrganizations, addMember };