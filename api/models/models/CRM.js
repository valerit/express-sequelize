/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('CRM', {
    Fase: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Colectivo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    Asociacion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    Nombre_colectivo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    Resultado: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
    Web: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Num_integrantes: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Provincia: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    CCAA: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Pais: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Tipo_cliente: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Persona_contacto: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    mail: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Telefono: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    Direccion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    Observaciones: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    Programa_utilizado: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  }, {
    tableName: 'CRM',
  });
};
