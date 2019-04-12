const bodyParser = require('body-parser');
const express = require('express');
const mapRoutes = require('express-routes-mapper');

const config = require('../../config/');
const database = require('../../config/database');
const auth = require('../../api/policies/auth.policy');

const beforeAction = async () => {
  await database.authenticate();
  await database.drop();
  await database.sync().then(() => console.log('Connection to the database has been established successfully'));

  const testapp = express();
  const mappedOpenRoutes = mapRoutes(config.publicRoutes, 'api/controllers/');
  const mappedAuthRoutes = mapRoutes(config.privateRoutes, 'api/controllers/');

  testapp.use(bodyParser.urlencoded({ extended: false }));
  testapp.use(bodyParser.json());

  // fill routes for express application
  testapp.use('/api', mappedOpenRoutes);

  // secure your private routes with jwt authentication middleware
  testapp.all('/api/*', (req, res, next) => auth(req, res, next));

  testapp.use('/api', mappedAuthRoutes);


  return testapp;
};

const afterAction = async () => {
  await database.close();
};


module.exports = { beforeAction, afterAction };
