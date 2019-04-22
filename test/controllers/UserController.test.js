const request = require('supertest');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const UserType = require('../../api/models/index').user_type;
const User = require('../../api/models/index').loginuser;
const Client = require('../../api/models/index').clientes;
const Food = require('../../api/models/index').alimentos;
const Recetas = require('../../api/models/index').recetas;
const Comidas = require('../../api/models/index').comidas;
const RecetasAlimentos = require('../../api/models/index').recetas_alimentos;
const ComidasAlimentos = require('../../api/models/index').comidas_alimentos;

const { USER_TYPES } = require('../../config/constants');

const { PROFESSIONAL, CLIENT } = USER_TYPES;

let api;

beforeAll(async () => {
  api = await beforeAction();

  // Create User Types
  await UserType.build({
    id: 1,
    type: 'professional',
  }).save();

  await UserType.build({
    id: 2,
    type: 'client',
  }).save();
});

afterAll(() => {
  afterAction();
});

test('Status | get', async () => {
  await request(api)
    .get('/api/status')
    .expect(200);
});

test('User | create', async () => {
  const res = await request(api)
    .post('/api/user')
    .set('Accept', /json/)
    .send({
      username: 'martin@mail.com',
      password: 'securepassword',
      password2: 'securepassword',
      // user_type_id: PROFESSIONAL,
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

  expect(await User.count({ where: {} })).toBe(0);
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
    huevos: 1,
  }).save();

  const food2 = await Food.build({
    nombre_alimento: 'test2',
    huevos: 2,
  }).save();

  const food3 = await Food.build({
    nombre_alimento: 'test3',
    huevos: 3,
  }).save();

  const food4 = await Food.build({
    nombre_alimento: 'test4',
    huevos: 4,
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
  expect(res2.body.data.length).toBe(4);
  expect(res2.body.total_count).toBe(4);

  // Query
  const res3 = await request(api)
    .get('/api/alimentos?nombre_alimento=test1')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(Array.isArray(res3.body.data)).toBeTruthy();
  expect(res3.body.data.length).toBe(1);
  expect(res3.body.data[0].nombre_alimento).toBe('test1');

  // Pagination
  const res4 = await request(api)
    .get('/api/alimentos?offset=1&limit=3')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  // Query using Post
  const res5 = await request(api)
    .post('/api/alimentos/query')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send({
      order: 'createdAt',
      direction: 'DESC',
      huevos: {
        $gte: 4,
      },
    })
    .expect(200);

  expect(Array.isArray(res5.body.data)).toBeTruthy();
  expect(res5.body.data.length).toBe(1);
  expect(res5.body.data[0].huevos >= 4).toBeTruthy();

  // Query using Post $like
  const res6 = await request(api)
    .post('/api/alimentos/query')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send({
      order: 'createdAt',
      direction: 'DESC',
      nombre_alimento: {
        $like: '%test%',
      },
    })
    .expect(200);

  expect(Array.isArray(res6.body.data)).toBeTruthy();
  expect(res6.body.data.length).toBe(4);

  await user.destroy();
  await food1.destroy();
  await food2.destroy();
  await food3.destroy();
  await food4.destroy();
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
  const user1 = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const user2 = await User.build({
    username: 'johnn@mail.com',
    password: 'securepassword',
  }).save();

  const user3 = await User.build({
    username: 'jack@mail.com',
    password: 'securepassword',
  }).save();

  const obj1 = await Recetas.build({
    id_creador: user1.id,
  }).save();

  const obj2 = await Recetas.build({
    id_creador: user2.id,
  }).save();

  const obj3 = await Recetas.build({
    id_creador: user3.id,
  }).save();

  // create alimentos
  const food1 = await Food.build({
    nombre_alimento: 'test1',
  }).save();

  // Create reacetas_alimentos
  const ra1 = await RecetasAlimentos.build({
    recetas_id: obj1.id,
    alimentos_id: food1.id,
    cantidad: 'test',
    unidades: 'test',
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
    .get('/api/recetas?order=id_creador')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(Array.isArray(res2.body.data)).toBeTruthy();
  expect(res2.body.data.length).toBe(3);
  expect(res2.body.total_count).toBe(3);

  expect(res2.body.data[0].id).toBe(obj1.id);
  expect(res2.body.data[0].recetas_alimentos.length).toBe(1);
  expect(res2.body.data[0].recetas_alimentos[0].id).toBe(ra1.id);

  // Query by id_creador
  const res3 = await request(api)
    .get(`/api/recetas?id_creador=${user1.id}&id_creador=${user2.id}&offset=0&limit=2`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);


  expect(Array.isArray(res3.body.data)).toBeTruthy();
  expect(res3.body.data.length).toBe(2);

  await food1.destroy();
  await ra1.destroy();
  await user1.destroy();
  await user2.destroy();
  await user3.destroy();
  await obj1.destroy();
  await obj2.destroy();
  await obj3.destroy();
});

test('Recetas | get single', async () => {
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

  // create alimentos
  const food1 = await Food.build({
    nombre_alimento: 'test1',
  }).save();

  // Create reacetas_alimentos
  const ra1 = await RecetasAlimentos.build({
    recetas_id: obj1.id,
    alimentos_id: food1.id,
    cantidad: 'test',
    unidades: 'test',
  }).save();

    // Create reacetas_alimentos
  const ra2 = await RecetasAlimentos.build({
    recetas_id: obj2.id,
    alimentos_id: food1.id,
    cantidad: 'test',
    unidades: 'test',
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
    .get(`/api/recetas/${obj1.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(res2.body.data.id).toBe(obj1.id);

  // Check if recetas_alimentos is returned
  expect(Array.isArray(res2.body.data.recetas_alimentos)).toBeTruthy();

  expect(res2.body.data.recetas_alimentos.length).toBe(1);
  expect(res2.body.data.recetas_alimentos[0].id).toBe(ra1.id);

  await user.destroy();
  await obj1.destroy();
  await obj2.destroy();
  await food1.destroy();
  await ra1.destroy();
  await ra2.destroy();
});

test('Recetas | create single', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const food1 = await Food.build({
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
    .post('/api/recetas')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send({
      id_creador: user.id,
      recetas_alimentos: [{
        alimentos_id: food1.id,
        cantidad: 'test',
        unidades: 'test',
      }],
    })
    .expect(200);

  expect(res2.body.data.id_creador).toBe(user.id);
  expect(Array.isArray(res2.body.data.recetas_alimentos)).toBe(true);
  expect(res2.body.data.recetas_alimentos.length).toBe(1);

  await user.destroy();
  await Recetas.destroy({
    where: {
      id: res2.body.data.id,
    },
  });
  await food1.destroy();
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

// Comidas ======================================================

test('Comidas | get all (auth)', async () => {
  const user1 = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const user2 = await User.build({
    username: 'johnn@mail.com',
    password: 'securepassword',
  }).save();

  const user3 = await User.build({
    username: 'jack@mail.com',
    password: 'securepassword',
  }).save();

  const obj1 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
  }).save();

  const obj2 = await Comidas.build({
    id_creador: user2.id,
    tipo_comida: 'type2',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
  }).save();

  const obj3 = await Comidas.build({
    id_creador: user3.id,
    tipo_comida: 'type2',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
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
    .get('/api/comidas')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(Array.isArray(res2.body.data)).toBeTruthy();
  expect(res2.body.data.length).toBe(3);
  expect(res2.body.total_count).toBe(3);

  const res3 = await request(api)
    .get(`/api/comidas?id_creador=${user1.id}&id_creador=${user2.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(Array.isArray(res3.body.data)).toBeTruthy();
  expect(res3.body.data.length).toBe(2);

  await user1.destroy();
  await user2.destroy();
  await user3.destroy();
  await obj1.destroy();
  await obj2.destroy();
  await obj3.destroy();
});


test('Comidas | get single', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const obj1 = await Comidas.build({
    id_creador: user.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
  }).save();


  const obj2 = await Comidas.build({
    id_creador: user.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
  }).save();

  // create alimentos
  const food1 = await Food.build({
    nombre_alimento: 'test1',
  }).save();

  // Create comidas_alimentos
  const ca1 = await ComidasAlimentos.build({
    comidas_id: obj1.id,
    alimentos_id: food1.id,
    cantidad: 'test',
    unidades: 'test',
  }).save();

    // Create comidas_alimentos
  const ca2 = await ComidasAlimentos.build({
    comidas_id: obj2.id,
    alimentos_id: food1.id,
    cantidad: 'test',
    unidades: 'test',
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
    .get(`/api/comidas/${obj1.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(res2.body.data.id).toBe(obj1.id);
  expect(res2.body.data.comidas_alimentos.length).toBe(1);
  expect(res2.body.data.comidas_alimentos[0].id).toBe(ca1.id);

  await user.destroy();
  await obj1.destroy();
  await obj2.destroy();
  await ca1.destroy();
  await ca2.destroy();
});

test('Comidas | create single', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  // create alimentos
  const food1 = await Food.build({
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
    .post('/api/comidas')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send({
      id_creador: user.id,
      tipo_comida: 'type1',
      explicacion: 'test',
      fecha_creacion: 'test',
      comidas_alimentos: [{
        alimentos_id: food1.id,
        cantidad: 'test',
        unidades: 'test',
      }],
    })
    .expect(200);

  expect(res2.body.data.id_creador).toBe(user.id);
  expect(res2.body.data.comidas_alimentos.length).toBe(1);
  expect(res2.body.data.comidas_alimentos[0].comidas_id).toBe(res2.body.data.id);

  await user.destroy();
  await Comidas.destroy({
    where: {
      id: res2.body.data.id,
    },
  });

  await food1.destroy();
  await ComidasAlimentos.destroy({
    where: {},
  });
});

test('Comidas | update single', async () => {
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

  const obj = await Comidas.build({
    id_creador: user.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
  }).save();

  const res2 = await request(api)
    .put(`/api/comidas/${obj.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .send({
      tipo_comida: 'test1',
    })
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(res2.body.data.id).toBe(obj.id);

  await user.destroy();
  await obj.destroy();
});

test('Comidas | delete single', async () => {
  const user = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  const obj = await Comidas.build({
    id_creador: user.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
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
    .delete(`/api/comidas/${obj.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json');

  const obj2 = await Comidas.find({
    where: { id: obj.id },
  });

  expect(!obj2).toBeTruthy();
  await user.destroy();
});

test('Comidas | bulk update', async () => {
  const user1 = await User.build({
    username: 'user1',
    password: 'password',
  }).save();

  const obj1 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
  }).save();

  const obj2 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type2',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
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
    .put('/api/comidas')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send([
      { id: obj1.id, tipo_comida: 'test1' },
      { id: obj2.id, tipo_comida: 'test2' },
    ])
    .expect(200);

  expect(Array.isArray(updateRes.body.data)).toBeTruthy();
  expect(updateRes.body.data[0].tipo_comida).toBe('test1');
  expect(updateRes.body.data[1].tipo_comida).toBe('test2');

  await user1.destroy();
  await obj1.destroy();
  await obj2.destroy();
});

test('Comidas | delete all', async () => {
  const user1 = await User.build({
    username: 'user1',
    password: 'password',
  }).save();

  const obj1 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
  }).save();

  const obj2 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
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
    .delete('/api/comidas')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .expect(200);

  expect(await Comidas.find({
    where: { id: obj1.id },
  })).toBe(null);

  expect(await Comidas.find({
    where: { id: obj2.id },
  })).toBe(null);

  await user1.destroy();
});

test('Comidas | get min/max', async () => {
  const user1 = await User.build({
    username: 'user1',
    password: 'password',
  }).save();

  const obj1 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
    num_comensales: 1,
  }).save();

  const obj2 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha2',
    num_comensales: 2,
  }).save();

  const obj3 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha3',
    num_comensales: 3,
  }).save();


  const res = await request(api)
    .post('/api/login')
    .set('Accept', /json/)
    .send({
      username: 'user1',
      password: 'password',
    })
    .expect(200);

  const minMaxRes = await request(api)
    .get('/api/comidas/min_max?field=num_comensales')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .expect(200);

  expect(minMaxRes.body.data.min).toBe(1);
  expect(minMaxRes.body.data.max).toBe(3);

  await obj1.destroy();
  await obj2.destroy();
  await obj3.destroy();

  await user1.destroy();
});

test('Comidas | get distinct', async () => {
  const user1 = await User.build({
    username: 'user1',
    password: 'password',
  }).save();

  const obj1 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha1',
    num_comensales: 1,
  }).save();

  const obj2 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha2',
    num_comensales: 2,
  }).save();

  const obj3 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha3',
    num_comensales: 3,
  }).save();


  const obj4 = await Comidas.build({
    id_creador: user1.id,
    tipo_comida: 'type1',
    explicacion: 'exp1',
    fecha_creacion: 'fecha3',
    num_comensales: 3, // num_comensales is still 3
  }).save();


  const res = await request(api)
    .post('/api/login')
    .set('Accept', /json/)
    .send({
      username: 'user1',
      password: 'password',
    })
    .expect(200);

  const minMaxRes = await request(api)
    .get('/api/comidas/distinct?field=num_comensales')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .expect(200);

  expect(minMaxRes.body.data.length).toBe(3);

  await obj1.destroy();
  await obj2.destroy();
  await obj3.destroy();
  await obj4.destroy();

  await user1.destroy();
});

// UserAlimentos


test('UserAlimentos | create, update', async () => {
  const user1 = await User.build({
    username: 'martin@mail.com',
    password: 'securepassword',
  }).save();

  // create alimentos
  const food1 = await Food.build({
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
    .post('/api/user_alimentos')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send({
      alimentos_id: food1.id,
    })
    .expect(200);

  expect(res2.body.data.alimentos_id).toBe(food1.id);
  expect(res2.body.data.id_creador).toBe(user1.id);
  expect(res2.body.data.nombre_alimento).toBe(food1.nombre_alimento);

  const res3 = await request(api)
    .put(`/api/user_alimentos/${res2.body.data.id}`)
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send({
      nombre_alimento: 'edited_test1',
    })
    .expect(200);
  expect(res3.body.data.nombre_alimento).toBe('edited_test1');

  await food1.destroy();
  await user1.destroy();
});

test('Client | create', async () => {
  // Create loginuser
  const res = await request(api)
    .post('/api/user')
    .set('Accept', /json/)
    .send({
      username: 'martin@mail.com',
      password: 'securepassword',
      password2: 'securepassword',
      user_type_id: 2, // Client
      // user_type_id: PROFESSIONAL,
    })
    .expect(200);

  expect(res.body.status).toBeTruthy();

  const user = await User.findById(res.body.data.user.id);

  expect(user.id).toBe(res.body.data.user.id);
  expect(user.username).toBe(res.body.data.user.username);

  // Create client

  const res2 = await request(api)
    .post('/api/clientes')
    .set('Accept', /json/)
    .set('Authorization', `Bearer ${res.body.data.token}`)
    .set('Content-Type', 'application/json')
    .send({
      fecha_creacion: 'test',
    })
    .expect(200);

  expect(res2.body.data.loginuser_id).toBe(user.id);
  const client = await Client.findById(res2.body.data.id);

  await client.destroy();
  await user.destroy();
});
