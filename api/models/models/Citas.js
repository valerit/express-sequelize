/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Citas', {
    usuario_profesional: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    id_cliente: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    fecha_cita: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    hora: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    duracion: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    ubicacion_cita: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    direccion_cita: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    dia_semana: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    mes: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    semana: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    recomendaciones: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    observaciones_citas: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
  }, {
    tableName: 'Citas',
  });
};
