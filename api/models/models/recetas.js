/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('recetas', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    id_creador: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    id_original: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    user_alimentos_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    tableName: 'recetas',
  });
};
