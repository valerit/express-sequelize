/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loginuser', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ttl: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    scopes: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    userId: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    user_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'loginuser'
  });
};
