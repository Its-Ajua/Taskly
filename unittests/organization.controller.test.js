const request = require('supertest');
const app = require('../../app');
const Organization = require('./organization.model');

describe('Organization Controller', () => {
  it('should create a new organization', async () => {
    const user = { _id: '1234567890abcdef' };
    const token = 'Bearer some-token';
    const req = { user, headers: { authorization: token } };
    const res = await request(app)
      .post('/organizations')
      .send({ name: 'Test Org', description: 'Test Description' })
      .set('Authorization', token);
    expect(res.status).toBe(201);
    expect(res.body.message).toBe('Organization created successfully');
  });

  it('should get all organizations for the current user', async () => {
    const user = { _id: '1234567890abcdef' };
    const token = 'Bearer some-token';
    const req = { user, headers: { authorization: token } };
    const res = await request(app)
      .get('/organizations')
      .set('Authorization', token);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});