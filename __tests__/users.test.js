const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');

describe('resourcery-backend routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should sign up a user', async () => {
    const newUser = {
      username: 'cake',
      password: '12345',
    };

    const res = await request(app).post('/api/v1/users').send(newUser);

    expect(res.body).toEqual({
      id: expect.any(String),
      username: 'cake',
    });
  });

  it('should sign in a user', async () => {
    const userObj = {
      username: 'rose',
      password: 'petal',
    };

    const user = await UserService.insert(userObj);

    const res = await request(app).post('/api/v1/users/session').send(userObj);

    expect(res.body).toEqual({ message: 'You are signed in!', user });

  });

  it('should sign out a user', async () => {
    const agent = request.agent(app);
    const newUser = {
      username: 'cake',
      password: '12345',
    };

    await UserService.insert(newUser);

    await agent.post('/api/v1/users/session').send(newUser);

    const res = await agent.delete('/api/v1/users/session');

    expect(res.body).toEqual({ message: 'You are signed out.' });

