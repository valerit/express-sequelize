const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const User = require('../../api/models/index').loginuser;
const Food = require('../../api/models/index').alimentos;
const Recipe = require('../../api/models/index').recetas;

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

test('User | get single', async () => {
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

  const res2 = await request(api)
    .get(`/api/user/${res.body.data.user.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(res2.body.data.id).toBe(res.body.data.user.id);

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

test('User | delete all (auth)', async () => {
  await User.build({
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

  await request(api)
    .delete('/api/user')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);
});


test('User | single update', async () => {
  const user = await User.build({
    username: 'user1',
    password: 'password',
  }).save();


  const res = await request(api)
    .post('/api/login')
    .set('Accept', /json/)
    .send({
      username: 'user1',
      password: 'password',
    })
    .expect(200);

  const updateRes = await request(api)
    .put(`/api/user/${user.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send({ username: 'user1E' })
    .expect(200);

  expect(updateRes.body.status).toBeTruthy();
  expect(updateRes.body.data.id).toBe(user.id);
});

test('User | bulk update', async () => {
  const user1 = await User.build({
    username: 'user1',
    password: 'password',
  }).save();

  const user2 = await User.build({
    username: 'user2',
    password: 'password',
  }).save();

  const user3 = await User.build({
    username: 'user3',
    password: 'password',
  }).save();

  const res = await request(api)
    .post('/api/login')
    .set('Accept', /json/)
    .send({
      username: 'user1',
      password: 'password',
    })
    .expect(200);

  const updateRes = await request(api)
    .put('/api/user')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send([
      { id: user2.id, username: 'user2E' },
      { id: user3.id, username: 'user3E' },
    ])
    .expect(200);

  expect(Array.isArray(updateRes.body.data)).toBeTruthy();
  expect(updateRes.body.data[0].username).toBe('user2E');
  expect(updateRes.body.data[1].username).toBe('user3E');

  await user1.destroy();
  await user2.destroy();
  await user3.destroy();
});

test('User | delete single', async () => {
  await User.build({
    username: 'user1',
    password: 'password',
  }).save();

  const user2 = await User.build({
    username: 'user2',
    password: 'password',
  }).save();

  const res = await request(api)
    .post('/api/login')
    .set('Accept', /json/)
    .send({
      username: 'user1',
      password: 'password',
    })
    .expect(200);

  const updateRes = await request(api)
    .delete(`/api/user/${user2.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(updateRes.body.status).toBe(true);
});

// Food ============================================================

test('Food | get all (auth)', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const food1 = await Food.build({
    nombre_alimento: 'test1',
  }).save();

  const food2 = await Food.build({
    nombre_alimento: 'test2',
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
    .get('/api/alimentos')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(Array.isArray(res2.body.data)).toBeTruthy();
  expect(res2.body.data.length).toBe(2);

  await user.destroy();
  await food1.destroy();
  await food2.destroy();
});

test('Food | get single food', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const food = await Food.build({
    nombre_alimento: 'test1',
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
    .get(`/api/alimentos/${food.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(res2.body.data.id).toBe(food.id);

  await user.destroy();
  await food.destroy();
});

// Recipes ======================================================

test('Recipe | get all (auth)', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const recipe1 = await Recipe.build({
    id_creador: user.id,
  }).save();

  const recipe2 = await Recipe.build({
    id_creador: user.id,
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
    .get('/api/recetas')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(Array.isArray(res2.body.data)).toBeTruthy();
  expect(res2.body.data.length).toBe(2);

  await user.destroy();
  await recipe1.destroy();
  await recipe2.destroy();
});

test('Recipe | get single', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const recipe = await Recipe.build({
    id_creador: user.id,
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
    .get(`/api/recetas/${recipe.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(res2.body.data.id).toBe(recipe.id);

  await user.destroy();
  await recipe.destroy();
});

test('Recipe | create single', async () => {
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
    .post('/api/recetas')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send({
      id_creador: user.id,
    })
    .expect(200);

  expect(res2.body.data.id_creador).toBe(user.id);

  await user.destroy();
  await Recipe.destroy({
    where: {
      id: res2.body.data.id,
    },
  });
});
