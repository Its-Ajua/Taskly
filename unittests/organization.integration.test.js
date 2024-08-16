const request = require('supertest');
const app = require('../../app');
const Organization = require('./organization.model');
const User = require('./user.model');

describe('Organization Integration', () => {
  let user, organization;

  beforeEach(async () => {
    user = await User.create({ email: 'test@example.com', password: 'password' });
    organization = await Organization.create({ name: 'Test Org', description: 'Test Description', owner: user._id });
  });

  it('should add a new member to an organization', async () => {
    const member = await User.create({ email: 'member@example.com', password: 'password' });
    const res = await request(app)
      .post(`/organizations/${organization._id}/members`)
      .send({ memberId: member._id })
      .set('Authorization', `Bearer ${user.generateToken()}`);
    expect(res.status).toBe(201);
    expect(res.body.message).toBe('Member added successfully');
  });

  it('should get all organizations for the current user', async () => {
    const res = await request(app)
      .get('/organizations')
      .set('Authorization', `Bearer ${user.generateToken()}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body[0]._id).toBe(organization._id);
  });
});