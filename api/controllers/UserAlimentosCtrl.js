const Alimentos = require('../models').alimentos;
const UserAlimentos = require('../models').user_alimentos;

const { onError } = require('./error');
const { getMinMax, getDistinct, queryAll } = require('./common');

const UserAlimentosCtrl = () => {
  // Query

  const bulkUpdate = async (req, res) => {
    try {
      await Promise.all(req.body.map((model) => UserAlimentos.update(model, {
        where: { id: model.id },
      })));

      const models = await UserAlimentos.findAll({
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
      const result = await UserAlimentos.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (result[0] === 0) { // Affected element count
        return res.status(404).send({
          status: false,
          error: 'UserAlimentos_not_found',
        });
      }

      const data = await UserAlimentos.find({
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
      const model = await UserAlimentos.find({
        where: {
          id: req.params.id,
        },
      });

      if (!model) {
        return res.status(404).send({
          status: false,
          error: 'UserAlimentos_not_found',
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
      await UserAlimentos.destroy({
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
      const model = await UserAlimentos.find({
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

  const create = async (req, res) => {
    try {
      const { alimentos_id } = req.body;

      const alimentos = await Alimentos.find({
        where: { id: alimentos_id },
      });

      const data = { ...alimentos.toJSON(), alimentos_id, id_creador: req.user.id };
      delete data.createdAt;
      delete data.updatedAt;
      delete data.id;

      const model = await UserAlimentos.build(data).save();

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
    update,
    getAll: queryAll(UserAlimentos),
    deleteAll,
    bulkUpdate,
    deleteSingle,
    getMinMax: getMinMax(UserAlimentos),
    getDistinct: getDistinct(UserAlimentos),
  };
};

module.exports = UserAlimentosCtrl;
