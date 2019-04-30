/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('comidas', {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
    id_creador: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tipo_comida: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    plato: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    objetivo_dieta: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tipo_dieta: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    explicacion: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    num_comensales: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    tableName: 'comidas',
  });
};
