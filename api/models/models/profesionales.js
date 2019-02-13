/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('profesionales', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    id_creador: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    apellidos: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING(65),
      allowNull: true,
    },
    numero_direccion: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    puerta_direccion: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    codigo_postal: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    localidad: {
      type: DataTypes.STRING(65),
      allowNull: true,
    },
    provincia: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    pais: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    restore_password: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
    },
    cuenta_banco: {
      type: DataTypes.STRING(22),
      allowNull: true,
    },
    compartir_informacion: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    razon_social: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    cif: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    perfil_profesional: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    direccion_virtual: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    loginuser_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'profesionales',
  });
};
