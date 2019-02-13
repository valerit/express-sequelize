/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('clientes', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
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
    password: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    restore_password: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
    },
    cuenta_banco: {
      type: DataTypes.STRING(22),
      allowNull: true,
    },
    razon_social: {
      type: DataTypes.STRING(150),
      allowNull: false,
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
    BMR_usuario: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    bmr_usuario_por_minuto: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    estado_cliente: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    frecuencia_conexion: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    n_conexiones: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    recencia_cliente: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    segmentacion_por_edad: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    biotipo: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    email_mk: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    enfermedades: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    medias_espalda_iniciales: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fecha_alta: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    fecha_fin_contrato: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    fecha_servicio: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    tipo_de_cliente: {
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
    hora_habitual_comer: {
      type: DataTypes.STRING(45),
      allowNull: false,
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
    medidas_espalda_objetivo: {
      type: DataTypes.FLOAT,
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
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    familias_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'clientes',
  });
};
