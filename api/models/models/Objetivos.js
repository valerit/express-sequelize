/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Objetivos', {
    Id: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Fecha: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Comentarios: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Peso_medida: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Porcentaje_grasa_estimado: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_cuello_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_pecho_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_biceps_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_cintura_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_muslos_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_gemelos_ideal: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_cuello: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_pecho: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_biceps: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_cintura: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_muslos: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Medidas_gemelos: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'Objetivos'
  });
};
