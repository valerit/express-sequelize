/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('access', {
    client_key: {
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  }, {
    tableName: 'access',
  });
};
