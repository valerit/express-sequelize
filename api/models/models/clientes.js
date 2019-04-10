/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('clientes', {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
    id_creador: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    apellidos: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING(65),
      allowNull: true,
    },
    codigo_postal: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    localidad: {
      type: DataTypes.STRING(65),
      allowNull: true,
    },
    provincia: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    pais: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    edad: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    porcentaje_grasa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    altura: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    sexo: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    nivel_actividad: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    intolerancias: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    medidas_hombros_ini: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_pecho_ini: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_cuello_ini: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_biceps_ini: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_cintura_ini: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_muslos_ini: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_gemelos_ini: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medida_cabeza: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medida_muneca: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    objetivo_comentarios: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    peso_objetivo: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    porcentaje_grasa_objetivo: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    biotipo: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    enfermedades: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    tipo_cliente: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    hora_habitual_cenar: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    hora_habitual_dormir: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    hora_habitual_levantarse: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tipo_dieta_preferida: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    consumo_de_alcohol: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    fuma: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    medidas_biceps_objetivo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_cintura_objetivo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_cuello_objetivo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_gemelos_objetivo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_hombros_objetivo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_muslos_objetivo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    medidas_pecho_objetivo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    objetivo_crecimiento_muscular: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    objetivo_dieta: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    numero_direccion: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    puerta_direccion: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    loginuser_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    familias_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    tableName: 'clientes',
  });
};
