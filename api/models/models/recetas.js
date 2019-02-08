/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('recetas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    id_creador: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    nombre_receta: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tipo_comida: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    tipo_dieta: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tipo_receta: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    publica_privada: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    explicacion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'recetas',
  });
};
