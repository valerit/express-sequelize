/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const PasswordReset = sequelize.define('password_reset', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true,
    },
    hash: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  }, {
    tableName: 'password_reset',
  });

  PasswordReset.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    return values;
  };
  return PasswordReset;
};
