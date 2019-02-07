/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Citas', {
    Usuario_profesional: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Id_cliente: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Fecha_cita: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Hora: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Duracion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ubicacion_cita: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Direccion_cita: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Dia_semana: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Mes: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Semana: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Recomendaciones: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Observaciones_citas: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'Citas'
  });
};
