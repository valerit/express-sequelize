const Alimentos = require('../models').alimentos;
const { onError } = require('./error');
const { getMinMax, getDistinct, queryAll } = require('./common');

const AlimentosController = () => {
  const create = async (req, res) => {
    try {
      const data = { ...req.body };

      const model = await Alimentos.build(data).save();

      return res.send({
        status: true,
        data: { ...model.toJSON() },
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const bulkUpdate = async (req, res) => {
    try {
      await Promise.all(req.body.map((model) => Alimentos.update(model, {
        where: { id: model.id },
      })));

      const models = await Alimentos.findAll({
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
      const result = await Alimentos.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (result[0] === 0) { // Affected element count
        return res.status(404).send({
          status: false,
          error: 'Alimentos_not_found',
        });
      }

      const data = await Alimentos.find({
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
      const model = await Alimentos.find({
        where: {
          id: req.params.id,
        },
      });

      if (!model) {
        return res.status(404).send({
          status: false,
          error: 'Alimentos_not_found',
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
      await Alimentos.destroy({
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
      const model = await Alimentos.find({
        where: { id: req.params.id },
      });

      if (model) {
        return res.send({
          status: true,
          data: model.toJSON(),
        });
      }
      return res.status(404).send({
        status: false,
        error: 'Alimentos_not_found',
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  return {
    create,
    get,
    getAll: queryAll(Alimentos),
    deleteAll,
    bulkUpdate,
    update,
    deleteSingle,
    getMinMax: getMinMax(Alimentos),
    getDistinct: getDistinct(Alimentos),
  };
};

module.exports = AlimentosController;
