const PlanSemanal = require('../models').plan_semanal;
const { onError } = require('./error');
const { getMinMax, getDistinct } = require('./common');

const PlanSemanalController = () => {
  const getAll = async (req, res) => {
    try {
      const models = await PlanSemanal.findAll();
      return res.status(200).json({ status: true, data: models, total_count: models.length });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const bulkUpdate = async (req, res) => {
    try {
      await Promise.all(req.body.map((model) => PlanSemanal.update(model, {
        where: { id: model.id },
      })));

      const models = await PlanSemanal.findAll({
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
      const result = await PlanSemanal.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (result[0] === 0) { // Affected element count
        return res.status(404).send({
          status: false,
          error: 'PlanSemanal_not_found',
        });
      }

      const data = await PlanSemanal.find({
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
      const model = await PlanSemanal.find({
        where: { id: req.params.id },
      });

      if (!model) {
        return res.status(404).send({
          status: false,
          error: 'PlanSemanal_not_found',
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
      await PlanSemanal.destroy({
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
      const model = await PlanSemanal.find({
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
        error: 'PlanSemanal_not_found',
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const create = async (req, res) => {
    try {
      const model = await PlanSemanal.build(req.body).save();
      return res.send({
        status: true,
        data: model.toJSON(),
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
    getMinMax: getMinMax(PlanSemanal),
    getDistinct: getDistinct(PlanSemanal),
  };
};

module.exports = PlanSemanalController;
