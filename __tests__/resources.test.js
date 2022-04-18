const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');
const Resource = require('../lib/models/Resource');

const newUser = {
  username: 'watson',
  password: 'isadog',
};

const resource = {
  latitude: '42.069690',
  longitude: '666.666666',
  type: 'apple',
  description: 'Has Apples',
  userId: '1',
  image: 'www.image.com',
  hours: '12p - 8p',
  category: 'Fruit Tree',
  available: true,
};

describe('resourcery-backend routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should allow a signed in user to create a resource', async () => {
    const agent = request.agent(app);

    await UserService.insert(newUser);

    await agent.post('/api/v1/users/session').send(newUser);

    const res = await agent.post('/api/v1/resources').send(resource);

    expect(res.body).toEqual({
      id: expect.any(String),
      latitude: '42.069690',
      longitude: '666.666666',
      type: 'apple',
      description: 'Has Apples',
      userId: '1',
      image: 'www.image.com',
      hours: '12p - 8p',
      category: 'Fruit Tree',
      available: true,
    });
  });

  it('allows a logged in user to get all resources', async () => {
    const agent = request.agent(app);

    await UserService.insert(newUser);

    let res = await agent.get('/api/v1/resources');

    expect(res.status).toEqual(401);

    await agent.post('/api/v1/users/session').send(newUser);

    res = await agent.get('/api/v1/resources');

    expect(res.status).toEqual(200);
  });

  it('an authenticated user can get a resource by ID', async () => {
    const agent = request.agent(app);

    await UserService.insert(newUser);

    await agent.post('/api/v1/users/session').send(newUser);

    const expected = await Resource.insert(resource);

    const res = await agent.get(`/api/v1/resources/${expected.id}`);

    expect(res.body).toEqual(expected);
  });

  it('an authenticated user can get a resource by ID and delete it', async () => {
    const agent = request.agent(app);

    await UserService.insert(newUser);

    await agent.post('/api/v1/users/session').send(newUser);

    const expected = await Resource.insert(resource);

    const res = await agent.delete(`/api/v1/resources/${expected.id}`);

    expect(res.body).toEqual(expected);
  });


  it('an authenticated user can update a resource by ID', async () => {
    const agent = request.agent(app);

    await UserService.insert(newUser);

    await agent.post('/api/v1/users/session').send(newUser);

    const expected = await Resource.insert(resource);

    const res = await request(app)
      .patch(`/api/v1/resources/${expected.id}`)
      .send({ type: 'Banana' });

    expect(res.body).toEqual({ ...expected, type: 'Banana' });
  });

