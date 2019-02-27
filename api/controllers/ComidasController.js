const { Op } = require('sequelize');

const Comidas = require('../models').comidas;
const ComidasAlimentos = require('../models').comidas_alimentos;
const ComidasRecetas = require('../models').comidas_recetas;

const { onError } = require('./error');

const ComidasController = () => {
  const getAll = async (req, res) => {
    try {
      const query = {};
      const rawQuery = req.query;
      console.info('Query:', JSON.stringify(rawQuery));

      const keys = Object.keys(rawQuery);
      console.info('keys:', keys);

      let key;
      for (let i = 0; i < keys.length; i += 1) {
        key = keys[i];
        if (Array.isArray(rawQuery[key])) {
          query[key] = {
            [Op.in]: rawQuery[key],
          };
        } else {
          query[key] = rawQuery[key];
        }
      }
      console.info('Actual_Query:', JSON.stringify(query));

      const models = await Comidas.findAll({
        where: query,
        include: [{
          model: ComidasAlimentos,
        }, {
          model: ComidasRecetas,
        }],
      });
      return res.status(200).json({ status: true, data: models });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const bulkUpdate = async (req, res) => {
    try {
      await Promise.all(req.body.map((model) => Comidas.update(model, {
        where: { id: model.id },
      })));

      const models = await Comidas.findAll({
        where: {
          id: {
            $in: req.body.map((model) => model.id),
          },
        },
      });

      return res.send({
        status: true,
        data: models.map((model) => model.toJSON()),
      });
    } catch (e) {
      return onError(req, res, e);
    }
  };

  const update = async (req, res) => {
    try {
      const result = await Comidas.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (result[0] === 0) { // Affected element count
        return res.status(404).send({
          status: false,
          error: 'Comidas_not_found',
        });
      }

      const data = await Comidas.find({
        where: {
          id: req.params.id,
        },
      });

      return res.send({
        status: true,
        data: data.toJSON(),
      });
    } catch (e) {
      return onError(req, res, e);
    }
  };

  const deleteSingle = async (req, res) => {
    try {
      const model = await Comidas.find({
        where: { id: req.params.id },
      });

      if (!model) {
        return res.status(404).send({
          status: false,
          error: 'Comidas_not_found',
        });
      }
      await model.destroy();
      return res.send({
        status: true,
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const deleteAll = async (req, res) => {
    try {
      await Comidas.destroy({
        where: {},
      });

      return res.send({
        status: true,
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const get = async (req, res) => {
    try {
      const model = await Comidas.find({
        where: { id: req.params.id },
        include: [{
          model: ComidasAlimentos,
        }, {
          model: ComidasRecetas,
        }],
      });

      if (model) {
        return res.send({
          status: true,
          data: model.toJSON(),
        });
      }
      return res.status(404).send({
        status: false,
        error: 'Comidas_not_found',
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const create = async (req, res) => {
    try {
      const data = req.body;
      const { comidas_alimentos, comidas_recetas } = data;
      delete data.comidas_alimentos;
      delete data.comidas_recetas;

      const model = await Comidas.build(data).save();

      // Create alimentos
      let aryCA = [];
      if (Array.isArray(comidas_alimentos) && comidas_alimentos.length > 0) {
        await ComidasAlimentos.bulkCreate(comidas_alimentos.map((r) => ({ ...r, comidas_id: model.id })));

        aryCA = await ComidasAlimentos.findAll({
          where: {
            comidas_id: model.id,
          },
        });
      }

      let aryCR = [];
      if (Array.isArray(comidas_recetas) && comidas_recetas.length > 0) {
        await ComidasRecetas.bulkCreate(comidas_recetas.map((cr) => ({ ...cr, comidas_id: model.id })));
        aryCR = await ComidasRecetas.findAll({
          where: {
            comidas_id: model.id,
          },
        });
      }

      return res.send({
        status: true,
        data: { ...model.toJSON(), comidas_alimentos: aryCA, comidas_recetas: aryCR },
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  return {
    create,
    get,
    getAll,
    deleteAll,
    bulkUpdate,
    update,
    deleteSingle,
  };
};

module.exports = ComidasController;
