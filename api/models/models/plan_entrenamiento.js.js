/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('plan_entrenamiento', {
    id: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
    nombre_plan: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    fecha_plan: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    cliente_plan: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    nivel_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    tipo_de_rutina: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    duracion_entrenamiento: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    intensidad_entrenamiento: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    nombre_creador: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  }, {
    tableName: 'plan_entrenamiento',
  });
};
