/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_semanal', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    id_creador: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    publica_privada: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    objetivo_dieta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tipo_dieta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    menu_dia_id_lunes: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    menu_dia_id_martes: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    menu_dia_id_miercoles: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    menu_dia_id_jueves: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    menu_dia_id_viernes: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    menu_dia_id_sabado: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    menu_dia_id_domingo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'plan_semanal'
  });
};
