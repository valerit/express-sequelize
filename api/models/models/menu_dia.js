/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('menu_dia', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tipo_comida: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    fecha_creacion: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    objetivo_dieta: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    rango_calorias: {
      type: DataTypes.INTEGER(30),
      allowNull: true,
    },
    tipo_dieta: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    id_creador: {
      type: DataTypes.INTEGER(11),
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
  }, {
    tableName: 'menu_dia',
  });
};
