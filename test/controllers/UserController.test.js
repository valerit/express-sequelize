const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const User = require('../../api/models/index').loginuser;

let api;

beforeAll(async () => {
  api = await beforeAction();
});

afterAll(() => {
  afterAction();
});

test('User | create', async () => {
  const res = await request(api)
    .post('/api/user')
    .set('Accept', /json/)
    .send({
      username: 'martin@mail.com',
      password: 'securepassword',
      password2: 'securepassword',
    })
    .expect(200);

  expect(res.body.status).toBeTruthy();

  const user = await User.findById(res.body.data.user.id);

  expect(user.id).toBe(res.body.data.user.id);
  expect(user.username).toBe(res.body.data.user.username);

  await user.destroy();
});

test('User | login', async () => {
  const user = await User.create({
    username: 'martin@mail.com',
    password: 'securepassword',
  });

  const res = await request(api)
    .post('/api/login')
    .set('Accept', /json/)
    .send({
      username: 'martin@mail.com',
      password: 'securepassword',
    })
    .expect(200);

  expect(res.body.status).toBeTruthy();
  expect(res.body.data.token).toBeTruthy();

  expect(user).toBeTruthy();

  await user.destroy();
});

test('User | get all (auth)', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const res = await request(api)
    .post('/api/login')
    .set('Accept', /json/)
    .send({
      username: 'martin@mail.com',
      password: 'securepassword',
    })
    .expect(200);

  expect(res.body.data.token).toBeTruthy();

  const res2 = await request(api)
    .get('/api/user')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(Array.isArray(res2.body.data)).toBeTruthy();
  expect(res2.body.data.length).toBe(1);

  // Try to get users without invalid auth
  await request(api)
    .get('/api/user')
    .set('Accept', /json/)
    .set('Authorization', 'Bearer')
    .set('Content-Type', 'application/json')
    .expect(401);

  // Try to get users without invalid auth
  await request(api)
    .get('/api/user')
    .set('Accept', /json/)
    .set('Content-Type', 'application/json')
    .expect(401);

  await user.destroy();
});
