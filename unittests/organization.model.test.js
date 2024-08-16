const mongoose = require('mongoose');
const Organization = require('./organization.model');

describe('Organization Model', () => {
  it('should create a new organization', async () => {
    const organization = new Organization({ name: 'Test Org', description: 'Test Description' });
    await organization.save();
    expect(organization.name).toBe('Test Org');
    expect(organization.description).toBe('Test Description');
  });

  it('should validate organization name', async () => {
    const organization = new Organization({ name: '', description: 'Test Description' });
    try {
      await organization.save();
      fail('Expected validation error');
    } catch (err) {
      expect(err.errors.name.message).toBe('Path `name` is required.');
    }
  });
});