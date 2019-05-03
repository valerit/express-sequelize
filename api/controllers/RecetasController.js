const { Op } = require('sequelize');

const Recetas = require('../models').recetas;
const Alimentos = require('../models').alimentos;
const RecetasAlimentos = require('../models').recetas_alimentos;
const ComidasRecetas = require('../models').comidas_recetas;

const { getMinMax, getDistinct, queryAll } = require('./common');

const { onError } = require('./error');

const RecetasController = () => {
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

      data.id_creador = req.user.id;

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

  const clone = async (req, res) => {
    const result = await Recetas.findOne(req.body, {
      where: {
        id: req.params.id,
      },
      raw: true,
    });
    if (result[0] === 0) { // Affected element count
      return res.status(404).send({
        status: false,
        error: 'Recetas_not_found',
      });
    }

    const original = result[0];
    original.id_original = original.id;
    original.id_creador = req.user.id;
    delete original.id;

    const newRecetas = await Recetas.build(original).save();
    const newRecetasRA = await Recetas.findOne({
      where: {
        id: newRecetas.id,
      },
      include: [{
        model: RecetasAlimentos,
      }],
    });


    return res.send({
      status: true,
      data: newRecetasRA.toJSON(),
    });
  };

  return {
    create,
    clone,
    get,
    getAll: queryAll(Recetas, { model: RecetasAlimentos }),
    deleteAll,
    bulkUpdate,
    update,
    deleteSingle,
    getMinMax: getMinMax(Recetas),
    getDistinct: getDistinct(Recetas),
  };
};

module.exports = RecetasController;
