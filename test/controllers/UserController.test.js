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

  expect(res.body.user).toBeTruthy();

  const user = await User.findById(res.body.user.id);

  expect(user.id).toBe(res.body.user.id);
  expect(user.username).toBe(res.body.user.username);

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

  expect(res.body.token).toBeTruthy();

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

  expect(res.body.token).toBeTruthy();

  const res2 = await request(api)
    .get('/api/user')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(res2.body.users).toBeTruthy();
  expect(res2.body.users.length).toBe(1);

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
