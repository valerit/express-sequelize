/* jshint indent: 2 */
const bcryptService = require('../../services/bcrypt.service');

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().password(user); // eslint-disable-line no-param-reassign
  },
};

module.exports = function (sequelize, DataTypes) {
  const loginuser = sequelize.define('loginuser', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ttl: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    scopes: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    userId: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    user_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    referral_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'loginuser',
    hooks,
  });

  loginuser.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };
  return loginuser;
};
