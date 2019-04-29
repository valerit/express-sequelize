/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Acciones', {
    id_cliente: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    fecha: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    fase: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    accion: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    detalle: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    resultado: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  }, {
    tableName: 'acciones',
  });
};
