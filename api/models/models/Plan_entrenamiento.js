/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Plan_entrenamiento', {
    Id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Nombre_plan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Fecha_plan: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Cliente_plan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Nivel_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Tipo_de_rutina: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Duracion_entrenamiento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Intensidad_entrenamiento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Nombre_creador: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'Plan_entrenamiento'
  });
};
