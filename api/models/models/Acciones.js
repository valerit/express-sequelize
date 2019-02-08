/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Acciones', {
    Id_cliente: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    Fecha: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    Fase: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Accion: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Detalle: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    Resultado: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  }, {
    tableName: 'Acciones',
  });
};
