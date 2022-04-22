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
  title: 'apple',
  description: 'Has Apples',
  userId: '1',
  image: 'www.image.com',
  hours: '12p - 8p',
  type: 'Fruit Tree',
  phone: 'Main Line: 333-333-3333',
};

const resource2 = {
  latitude: '42.069690',
  longitude: '666.666666',
  title: 'Food Box',
  description: 'Has Food',
  userId: '1',
  image: 'www.image.com',
  hours: '12p - 8p',
  type: 'Food Box',
  phone: 'Main Line: 333-333-3333',
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

    const { body } = await agent.post('/api/v1/resources').send(resource);

    expect(body).toEqual({
      id: expect.any(String),
      latitude: '42.069690',
      longitude: '666.666666',
      title: 'apple',
      description: 'Has Apples',
      userId: '1',
      image: 'www.image.com',
      hours: '12p - 8p',
      type: 'Fruit Tree',
      phone: 'Main Line: 333-333-3333',
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

    const { body } = await agent.get(`/api/v1/resources/${expected.id}`);

    expect(body).toEqual(expected);
  });

  it('gets all the users resources', async () => {});

  it('an authenticated user can get a resource by ID and delete it', async () => {
    const agent = request.agent(app);

    await UserService.insert(newUser);

    await agent.post('/api/v1/users/session').send(newUser);

    const expected = await Resource.insert(resource);

    const { body } = await agent.delete(`/api/v1/resources/${expected.id}`);

    expect(body).toEqual(expected);
  });

  it('an authenticated user can update a resource by ID', async () => {
    const agent = request.agent(app);

    await UserService.insert(newUser);

    await agent.post('/api/v1/users/session').send(newUser);

    const expected = await Resource.insert(resource);

    const { body } = await request(app)
      .patch(`/api/v1/resources/${expected.id}`)
      .send({ type: 'Banana' });

    expect(body).toEqual({ ...expected, type: 'Banana' });
  });

  it('gets a resource by type', async () => {
    const agent = request.agent(app);

    await UserService.insert(newUser);

    await agent.post('/api/v1/users/session').send(newUser);

    await Resource.insert(resource2);

    const expected = await Resource.insert(resource);

    const { body } = await agent.get(`/api/v1/resources/type/${expected.type}`);

    expect(body).toEqual([expected]);
  });
});
