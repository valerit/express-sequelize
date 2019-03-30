const { Op } = require('sequelize');

const Recetas = require('../models').recetas;
const Alimentos = require('../models').alimentos;
const RecetasAlimentos = require('../models').recetas_alimentos;

const { onError } = require('./error');

const RecetasController = () => {
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
      const models = await Recetas.findAll({
        where: query,
        include: [{ model: RecetasAlimentos }],
      });

      const total_count = await Recetas.count({
        where: query,
      });

      return res.status(200).json({ status: true, data: models, total_count });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const bulkUpdate = async (req, res) => {
    try {
      await Promise.all(req.body.map((model) => Recetas.update(model, {
        where: { id: model.id },
      })));

      const models = await Recetas.findAll({
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
      const result = await Recetas.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (result[0] === 0) { // Affected element count
        return res.status(404).send({
          status: false,
          error: 'Recetas_not_found',
        });
      }

      const data = await Recetas.find({
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
      const model = await Recetas.find({
        where: { id: req.params.id },
      });

      if (!model) {
        return res.status(404).send({
          status: false,
          error: 'Recetas_not_found',
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
      await Recetas.destroy({
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
      const model = await Recetas.find({
        where: { id: req.params.id },
        include: [{
          model: RecetasAlimentos,
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
        error: 'Recetas_not_found',
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const create = async (req, res) => {
    try {
      const data = req.body;
      const { recetas_alimentos } = data;
      delete data.recetas_alimentos;

      const model = await Recetas.build(data).save();

      // Create alimentos
      let aryRA = [];
      if (Array.isArray(recetas_alimentos) && recetas_alimentos.length > 0) {
        await RecetasAlimentos.bulkCreate(recetas_alimentos.map((r) => ({ ...r, recetas_id: model.id })));

        aryRA = await RecetasAlimentos.findAll({
          where: {
            recetas_id: model.id,
          },
        });
      }

      return res.send({
        status: true,
        data: { ...model.toJSON(), recetas_alimentos: aryRA },
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

module.exports = RecetasController;
