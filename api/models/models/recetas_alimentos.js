/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('recetas_alimentos', {
    recetas_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
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
