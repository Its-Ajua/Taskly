const express = require('express');
const router = express.Router();
const { createOrganization, getOrganizations, addMember } = require('../controllers/organization.controller');

router.post('/', createOrganization);
router.get('/', getOrganizations);
router.post('/:organizationId/members', addMember);

module.exports = router;