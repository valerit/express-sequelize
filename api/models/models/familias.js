/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('familias', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    id_padre: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
  }, {
    tableName: 'familias',
  });
};
