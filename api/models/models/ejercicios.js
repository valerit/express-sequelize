/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ejercicios', {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
    ejercicio: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    grupo_muscular: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    area_muscular: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    intensidad: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    compuesto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    tipo_ejercicio: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    nivel_usuario: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    util: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    movimiento_funcional: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    imagen: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    video: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    coeficiente_actividad: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fecha_alta: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    grupo_muscular_secundario: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    nombre_ejercicio_ingles: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    observaciones_ejercicios: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    top: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    usuario_alta: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    tableName: 'ejercicios',
  });
};
