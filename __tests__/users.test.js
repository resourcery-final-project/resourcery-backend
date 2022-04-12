const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

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
});
