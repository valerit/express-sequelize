const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const User = require('../../api/models/index').loginuser;
const Food = require('../../api/models/index').alimentos;
const Recetas = require('../../api/models/index').recetas;

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
  await user.destroy();
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
  const user1 = await User.build({
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
  await user1.destroy();
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

// Recetass ======================================================

test('Recetas | get all (auth)', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const obj1 = await Recetas.build({
    id_creador: user.id,
  }).save();

  const obj2 = await Recetas.build({
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
  await obj1.destroy();
  await obj2.destroy();
});

test('Recetas | get single', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const obj = await Recetas.build({
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
    .get(`/api/recetas/${obj.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(res2.body.data.id).toBe(obj.id);

  await user.destroy();
  await obj.destroy();
});

test('Recetas | create single', async () => {
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
  await Recetas.destroy({
    where: {
      id: res2.body.data.id,
    },
  });
});

test('Recetas | update single', async () => {
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

  const obj = await Recetas.build({
    id_creador: user.id,
  }).save();

  const res2 = await request(api)
    .put(`/api/recetas/${obj.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .send({
      nombre_receta: 'test1',
    })
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(res2.body.data.id).toBe(obj.id);

  await user.destroy();
  await obj.destroy();
});

test('Recetas | delete single', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const obj = await Recetas.build({
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

  await request(api)
    .delete(`/api/recetas/${obj.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json');

  const obj2 = await Recetas.find({
    where: { id: obj.id },
  });

  expect(!obj2).toBeTruthy();
  await user.destroy();
});

test('Recetas | bulk update', async () => {
  const user1 = await User.build({
    username: 'user1',
    password: 'password',
  }).save();

  const obj1 = await Recetas.build({
    id_creador: user1.id,
  }).save();

  const obj2 = await Recetas.build({
    id_creador: user1.id,
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
    .put('/api/recetas')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send([
      { id: obj1.id, nombre_receta: 'test1' },
      { id: obj2.id, nombre_receta: 'test2' },
    ])
    .expect(200);

  expect(Array.isArray(updateRes.body.data)).toBeTruthy();
  expect(updateRes.body.data[0].nombre_receta).toBe('test1');
  expect(updateRes.body.data[1].nombre_receta).toBe('test2');

  await user1.destroy();
  await obj1.destroy();
  await obj2.destroy();
});

test('Recetas | delete all', async () => {
  const user1 = await User.build({
    username: 'user1',
    password: 'password',
  }).save();

  const obj1 = await Recetas.build({
    id_creador: user1.id,
  }).save();

  const obj2 = await Recetas.build({
    id_creador: user1.id,
  }).save();

  const res = await request(api)
    .post('/api/login')
    .set('Accept', /json/)
    .send({
      username: 'user1',
      password: 'password',
    })
    .expect(200);

  await request(api)
    .delete('/api/recetas')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(await Recetas.find({
    where: { id: obj1.id },
  })).toBe(null);

  expect(await Recetas.find({
    where: { id: obj2.id },
  })).toBe(null);

  await user1.destroy();
});
