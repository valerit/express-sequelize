/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  }, {
    tableName: 'user_type',
  });
};
