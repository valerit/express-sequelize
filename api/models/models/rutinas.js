/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rutinas', {
    id_rutina: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_creador: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dia_entrenamiento: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    tipo_rutina: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    combinado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    orden: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    orden_combinado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    series: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    reps: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tiempo_ejercicio: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    descanso_segundos: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    duracion_total: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    minutos_compuestos: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    calorias_quemadas: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    volumen: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    mi_peso_max: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    one_rep_max: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Peso_levantado: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'rutinas'
  });
};
