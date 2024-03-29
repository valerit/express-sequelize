const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const normalizedPath = require('path').join(__dirname, 'models');

const models = {};
require('fs').readdirSync(normalizedPath).forEach((file) => {
  if (file.indexOf('.js') >= 0) {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    models[file.replace('.js', '')] = require(`${normalizedPath}/${file}`)(sequelize, Sequelize);
  }
});

const {
  loginuser, clientes, profesionales, user_type, familias, recetas, recetas_alimentos, alimentos, comidas, comidas_alimentos,
  menu_dia, menu_dia_comidas, plan_semanal, comidas_recetas, user_alimentos,
} = models;

clientes.belongsTo(loginuser, { foreignKey: 'loginuser_id', sourceKey: 'id' });
profesionales.belongsTo(loginuser, { foreignKey: 'loginuser_id', sourceKey: 'id' });

user_type.hasMany(loginuser, { foreignKey: 'user_type_id', sourceKey: 'id' });
loginuser.belongsTo(user_type, { foreignKey: 'user_type_id', sourceKey: 'id' });

familias.hasMany(clientes, { foreignKey: 'familias_id', sourceKey: 'id' });
clientes.belongsTo(familias, { foreignKey: 'familias_id', sourceKey: 'id' });

recetas.hasMany(recetas_alimentos, { foreignKey: 'recetas_id', sourceKey: 'id' });
recetas_alimentos.belongsTo(recetas, { foreignKey: 'recetas_id', sourceKey: 'id' });

alimentos.hasMany(recetas_alimentos, { foreignKey: 'alimentos_id', sourceKey: 'id' });
recetas_alimentos.belongsTo(alimentos, { foreignKey: 'alimentos_id', sourceKey: 'id' });

comidas.hasMany(comidas_alimentos, { foreignKey: 'comidas_id', sourceKey: 'id' });
comidas_alimentos.belongsTo(comidas, { foreignKey: 'comidas_id', sourceKey: 'id' });

alimentos.hasMany(comidas_alimentos, { foreignKey: 'alimentos_id', sourceKey: 'id' });
comidas_alimentos.belongsTo(alimentos, { foreignKey: 'alimentos_id', sourceKey: 'id' });

alimentos.hasMany(comidas_alimentos, { foreignKey: 'alimentos_id', sourceKey: 'id' });
comidas_alimentos.belongsTo(alimentos, { foreignKey: 'alimentos_id', sourceKey: 'id' });

menu_dia.hasMany(menu_dia_comidas, { foreignKey: 'menu_dia_id', sourceKey: 'id' });
menu_dia_comidas.belongsTo(menu_dia, { foreignKey: 'menu_dia_id', sourceKey: 'id' });

comidas.hasMany(menu_dia_comidas, { foreignKey: 'comidas_id', sourceKey: 'id' });
menu_dia_comidas.belongsTo(comidas, { foreignKey: 'comidas_id', sourceKey: 'id' });

const plan_semanal_menu_dia_keys = ['plan_semanal', 'menu_dia_id_martes', 'menu_dia_id_miercoles', 'menu_dia_id_jueves', 'menu_dia_id_viernes', 'menu_dia_id_sabado', 'menu_dia_id_domingo'];

for (let i = 0; i < plan_semanal_menu_dia_keys.length; i += 1) {
  menu_dia.hasMany(plan_semanal, { foreignKey: plan_semanal_menu_dia_keys[i], sourceKey: 'id' });
  plan_semanal.belongsTo(menu_dia, { foreignKey: plan_semanal_menu_dia_keys[i], sourceKey: 'id' });
}

comidas.hasMany(comidas_recetas, { foreignKey: 'comidas_id', sourceKey: 'id' });
comidas_recetas.belongsTo(comidas, { foreignKey: 'comidas_id', sourceKey: 'id' });

recetas.hasMany(comidas_recetas, { foreignKey: 'recetas_id', sourceKey: 'id' });
comidas_recetas.belongsTo(recetas, { foreignKey: 'recetas_id', sourceKey: 'id' });

alimentos.hasMany(user_alimentos, { foreignKey: 'alimentos_id', sourceKey: 'id' });
user_alimentos.belongsTo(alimentos, { foreignKey: 'alimentos_id', sourceKey: 'id' });

loginuser.hasMany(user_alimentos, { foreignKey: 'id_creador', sourceKey: 'id' });
user_alimentos.belongsTo(loginuser, { foreignKey: 'id_creador', sourceKey: 'id' });

user_alimentos.hasMany(recetas, { foreignKey: 'user_alimentos_id', sourceKey: 'id' });
recetas.belongsTo(user_alimentos, { foreignKey: 'user_alimentos_id', sourceKey: 'id' });

user_alimentos.hasMany(comidas_alimentos, { foreignKey: 'user_alimentos_id', sourceKey: 'id' });
comidas_alimentos.belongsTo(user_alimentos, { foreignKey: 'user_alimentos_id', sourceKey: 'id' });

module.exports = models;
