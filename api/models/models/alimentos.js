/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('alimentos', {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
    nombre_alimento: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    descrip_c_padre: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    gluten: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    lactosa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    crustaceos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    pescados: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    huevos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    soja: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    cacahuete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    leucina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    isoleucina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    valina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    lisina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    metionina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fenilalanina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    histidina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    treonina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    triptofano: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    alanina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    arginina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    asparagina: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    acido_aspartico: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    cisteina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    glutamina: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    acido_glutamico: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    glicina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    prolina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    serina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tirosina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    aminoacido_limitante: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    proteina_completa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    valor_biologico_proteina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    estres: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    antinflamatorio: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    descanso: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    neurogenesis: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    antienvejecimiento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    energia: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    grasas: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    proteina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    carbohidratos: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fibra: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_a: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_d: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_e: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_b_12: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_b_6: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_c: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    calcio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    hierro: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    potasio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    magnesio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    sodio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fosforo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    ioduro: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    selenio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    zinc: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    cobre: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    dopamina: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    seretonina: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    bdnf: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    endorfinas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    ondas_alfa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    folato: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    riboflavina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tiamina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    azucar: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    omega_3: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    ig: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fuente: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    precio_unitario: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    cantidad_envase_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    euro_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    marca: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    frecuencia: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    familia: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    carga_glucemica_rac_hab: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    proveedor: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    otras_marcas: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    organico_procesado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    subfamilia: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    coenzima_q_10: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    colageno: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    creatina: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    omega_6: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    glutation: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    dimensionable: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    fecha_alta: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    racion_habitual_hombre: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    racion_habitual_mujer: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    keto_diet: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    vegetarianos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    veganos: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    porcentaje_grasas: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    porcentaje_proteina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    porcentaje_carbohidrato: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    macronutriente_principal: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    circulacion: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    tef: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    nutrigenetica: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    oxido_nitrico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    acetilcolina_ac: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    acido_aminobutirico_gaba: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    anticancer: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    beta_caroteno: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    codigo_ean: {
      type: DataTypes.INTEGER(13),
      allowNull: true,
    },
    glutamato: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    hormonas: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    lectinas: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    licopeno: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    mercurio: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    metodo_de_coccion: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    nootropics: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    noradrenalina_ne: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    ondas_delta: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    ondas_gama: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    ondas_theta: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    pesticidas_e_insecticidas: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    prebiotico: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    probiotico: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    resveratrol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    sulforafano: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    unidad_de_medida: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    energia_kj: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    cenizas: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    sucrosa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    dextrosa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    con_licopeno: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    maltosa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    galactosa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    almidon: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    manganeso: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fluoruro: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    niacina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    acido_pantotenico: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    acido_folico: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    folate_alimento: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    folate_de: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    colina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    betaina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_b_12_anadida: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    retinol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    alfa_caroteno: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    beta_cryptoxanthin: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_a_iu: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    luteina_zeazantina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_E_anadida: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tocopherol_beta: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tocopherol_gamma: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tocotrienol_alpha: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tocopherol_delta: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tocotrienol_beta: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tocotrienol_gamma: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tocotrienol_delta: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamin_d_d2_d3: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamin_d2_ergocalciferol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamin_d3_cholecalciferol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_diu: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vitamina_k: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    dihydrophylloquinone: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    menaquinone_4: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    acidos_grasos_total_saturados: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    acidos_grasos_total_monoinsaturados: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    acidos_grasos_total_polinsaturados: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    epa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    dpa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    dha: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    acidos_grasos_tota_trans: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    acidos_grasos_total_trans_monoenoico: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    acidos_grasos_total_trans_polienoico: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fitoesteroles: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    estigmasterol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    campesterol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    beta_sitosterol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    cafeina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    teobromina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    english_name: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    fructosa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    alimento_generico: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    observaciones: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    hidroxiprolina: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    family: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    pais: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    agua_humedad: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    colesterol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    alcohol_etanol: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    con_lactosa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    idbd: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    codigo_padre: {
      type: DataTypes.STRING(5),
      allowNull: true,
    }
  }, {
    tableName: 'alimentos',
  });
};
