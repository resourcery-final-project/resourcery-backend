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

  it('should allow a signed in user to create a fruit tree resource', async () => {
    const agent = request.agent(app);

    const newUser = {
      username: 'watson',
      password: 'isadog',
    };

    await UserService.insert(newUser);

    await agent.post('/api/v1/users/session').send(newUser);

    const res = await agent.post('/api/v1/fruit-trees').send({
      userId: '1',
      latitude: '42.069690',
      longitude: '666.666666',
      type: 'Apple',
      description: 'Has Apples',
      permission: true,
    });

    expect(res.body).toEqual({
      id: expect.any(String),
      userId: '1',
      latitude: '42.069690',
      longitude: '666.666666',
      type: 'Apple',
      description: 'Has Apples',
      permission: true,
    });
  });
});
