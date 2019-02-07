/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ejercicios', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Ejercicio: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Grupo_muscular: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Area_muscular: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Intensidad: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Compuesto: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Tipo_ejercicio: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Nivel_usuario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Util: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Movimiento_funcional: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Imagen: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Video: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Coeficiente_actividad: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Fecha_alta: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Grupo_muscular_secundario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Link: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Nombre_ejercicio_ingles: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Observaciones_ejercicios: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Top: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Usuario_alta: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'ejercicios'
  });
};
