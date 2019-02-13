const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const normalizedPath = require('path').join(__dirname, 'models');

const models = {};
require('fs').readdirSync(normalizedPath).forEach((file) => {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  models[file.replace('.js', '')] = require(`${normalizedPath}/${file}`)(sequelize, Sequelize);
});

const {
  loginuser, clientes, profesionales, user_type, familias,
} = models;
console.info('loginuser:', loginuser.rawAttributes);

clientes.belongsTo(loginuser, { foreignKey: 'loginuser_id', sourceKey: 'id' });
profesionales.belongsTo(loginuser, { foreignKey: 'loginuser_id', sourceKey: 'id' });

user_type.hasMany(loginuser, { foreignKey: 'user_type_id', sourceKey: 'id' });
loginuser.belongsTo(user_type, { foreignKey: 'loginuser_id', sourceKey: 'id' });

familias.hasMany(clientes, { foreignKey: 'familias_id', sourceKey: 'id' });
clientes.belongsTo(familias, { foreignKey: 'loginuser_id', sourceKey: 'id' });


module.exports = models;
