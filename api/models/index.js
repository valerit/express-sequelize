const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const normalizedPath = require('path').join(__dirname, 'models');

const models = {};
require('fs').readdirSync(normalizedPath).forEach((file) => {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  models[file.replace('.js', '')] = require(`${normalizedPath}/${file}`)(sequelize, Sequelize);
});

const { loginuser, clientes, profesionales } = models;
console.info('loginuser:', loginuser.rawAttributes);

clientes.belongsTo(loginuser, { foreignKey: 'loginuser_id', sourceKey: 'id' });
profesionales.belongsTo(loginuser, { foreignKey: 'loginuser_id', sourceKey: 'id' });

module.exports = models;
