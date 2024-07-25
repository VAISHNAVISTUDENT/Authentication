const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');
const { setupDatabase, tearDownDatabase } = require('./testUtils');

before(setupDatabase);
after(tearDownDatabase);

describe('Auth API', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body).to.have.property('username', 'testuser');
    expect(res.body).to.have.property('email', 'test@example.com');
  });

  it('should login a user and return a JWT', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
  });

  it('should retrieve the logged-in user profile', async () => {
    const loginRes = await request(app)
      .post('/api/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });

    const token = loginRes.body.token;

    const res = await request(app)
      .get('/api/profile')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('username', 'testuser');
    expect(res.body).to.have.property('email', 'test@example.com');
  });
});
