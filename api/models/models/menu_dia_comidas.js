/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('menu_dia_comidas', {
    menu_dia_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    comidas_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    tipo_comida: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  }, {
    tableName: 'menu_dia_comidas',
  });
};
