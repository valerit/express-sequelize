/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alimentos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre_alimento: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    descrip_c_padre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Gluten: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Lactosa: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Crustaceos: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Pescados: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Huevos: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Soja: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Cacahuete: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Leucina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Isoleucina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Valina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Lisina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Metionina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Fenilalanina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Histidina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Treonina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Triptofano: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Alanina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Arginina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Asparagina: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Acido_aspartico: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Cisteina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Glutamina: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    acido_glutamico: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Glicina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Prolina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Serina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tirosina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Aminoacido_limitante: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Proteina_completa: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Valor_biologico_proteina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Estres: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Antinflamatorio: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Descanso: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Neurogenesis: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Antienvejecimiento: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Energia: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Grasas: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Proteina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Carbohidratos: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Fibra: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_A: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_D: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_E: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_B_12: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_B_6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_C: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Calcio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Hierro: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Potasio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Magnesio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Sodio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Fosforo: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Ioduro: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Selenio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Zinc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Cobre: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Dopamina: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Seretonina: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    BDNF: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Endorfinas: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Ondas_Alfa: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    folato: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    riboflavina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    tiamina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Azucar: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Omega_3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    IG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Fuente: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Precio_unitario: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Cantidad_envase_Kg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    euro_kg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MARCA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FRECUENCIA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    familia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CARGA_GLUCEMICA_RAC_HAB: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Otras_marcas: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Organico_Procesado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Subfamilia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Coenzima_Q_10: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Colageno: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Creatina: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Omega_6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Glutation: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Dimensionable: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Fecha_alta: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Racion_habitual_hombre: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Racion_habitual_mujer: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Keto_diet: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Vegetarianos: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Veganos: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    porcentaje_Grasas: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    porcentaje_Proteina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    porcentaje_Carbohidrato: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Macronutriente_principal: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Circulacion: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TEF: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Nutrigenetica: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    oxido_nitrico: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Acetilcolina_AC: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    acido_aminobutirico_GABA: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Anticancer: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Beta_caroteno: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Codigo_EAN: {
      type: DataTypes.INTEGER(13),
      allowNull: true
    },
    Glutamato: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Hormonas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Lectinas: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Licopeno: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Mercurio: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Metodo_de_coccion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Nootropics: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Noradrenalina_NE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Ondas_Delta: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Ondas_Gama: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Ondas_Theta: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Pesticidas_e_insecticidas: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Prebiotico: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Probiotico: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Resveratrol: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Sulforafano: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Unidad_de_medida: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Energia_Kj: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Cenizas: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Sucrosa: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Dextrosa: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Con_licopeno: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Maltosa: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Galactosa: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Almidon: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Manganeso: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Fluoruro: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Niacina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Acido_pantotenico: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Acido_folico: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Folate_alimento: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Folate_DE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Colina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Betaina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_B_12_anadida: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Retinol: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Alfa_caroteno: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Beta_Cryptoxanthin: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_A_IU: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Luteina_zeazantina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_E_anadida: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tocopherol_beta: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tocopherol_gamma: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tocotrienol_alpha: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tocopherol_delta: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tocotrienol_beta: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tocotrienol_gamma: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tocotrienol_delta: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamin_D_D2_D3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamin_D2_ergocalciferol: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamin_D3_cholecalciferol: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_DIU: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Vitamina_K: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Dihydrophylloquinone: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Menaquinone_4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Acidos_grasos_total_saturados: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Acidos_grasos_total_monoinsaturados: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Acidos_grasos_total_polinsaturados: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DPA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DHA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Acidos_grasos_tota_trans: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Acidos_grasos_total_trans_monoenoico: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Acidos_grasos_total_trans_polienoico: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Fitoesteroles: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Estigmasterol: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Campesterol: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Beta_sitosterol: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Cafeina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Teobromina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    English_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Fructosa: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Alimento_generico: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Hidroxiprolina: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Family: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pais: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Agua_humedad: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Colesterol: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Alcohol_etanol: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Con_lactosa: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IDbd: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    codigo_padre: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'alimentos'
  });
};
