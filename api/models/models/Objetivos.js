/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('objetivos', {
    id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    comentarios: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    peso_medida: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    porcentaje_grasa_estimado: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_cuello_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_pecho_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_biceps_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_cintura_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_muslos_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_gemelos_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_cuello: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_pecho: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_biceps: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_cintura: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_muslos: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_gemelos: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  }, {
    tableName: 'objetivos',
  });
};
