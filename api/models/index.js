const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const normalizedPath = require('path').join(__dirname, 'api/models/models');

const models = {};
require('fs').readdirSync(normalizedPath).forEach(function(file) {
  models[file.replace('.js', '')] = require("./routes/" + file)(sequelize, Sequelize);
});

module.exports = models;