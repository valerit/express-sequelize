/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('recetas_alimentos', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    recetas_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    alimentos_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    unidades: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  }, {
    tableName: 'recetas_alimentos',
  });
};
