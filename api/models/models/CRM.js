/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('CRM', {
    fase: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    colectivo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    asociacion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    nombre_colectivo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    resultado: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
    web: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    num_integrantes: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    provincia: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    ccaa: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    pais: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    tipo_cliente: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    persona_contacto: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    mail: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    observaciones: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    programa_utilizado: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  }, {
    tableName: 'CRM',
  });
};
