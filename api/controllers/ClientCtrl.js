const { Op } = require('sequelize');

const Client = require('../models').clientes;
const User = require('../models').loginuser;
const { getMinMax, getDistinct, queryAll } = require('./common');
const { USER_TYPES } = require('../../config/constants');

const { onError } = require('./error');

const { PROFESSIONAL, CLIENT } = USER_TYPES;
const userFields = ['id', 'username', 'email', 'password', 'rol', 'ttl', 'scopes', 'user_type_id', 'referral_link'];

const ClientCtrl = () => {
  const bulkUpdate = async (req, res) => {
    try {
      await Promise.all(req.body.map((model) => Client.update(model, {
        where: { id: model.id },
      })));

      const models = await Client.findAll({
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
      const result = await Client.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (result[0] === 0) { // Affected element count
        return res.status(404).send({
          status: false,
          error: 'Client_not_found',
        });
      }

      const data = await Client.find({
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
      const model = await Client.find({
        where: { id: req.params.id },
      });

      if (!model) {
        return res.status(404).send({
          status: false,
          error: 'Client_not_found',
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
      await Client.destroy({
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
      const model = await Client.find({
        where: { id: req.params.id },
        include: [{
          model: User,
          fields: userFields,
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
        error: 'Client_not_found',
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const create = async (req, res) => {
    try {
      const data = { ...req.body };

      if (req.user.user_type_id !== CLIENT) { // loginuser is not client
        return res.status(400).send({
          status: false,
          error: 'not_loginuser_client',
        });
      }

      // Set loginuser_id to the current request
      data.id_creador = req.user.id;
      data.loginuser_id = req.user.id;

      const model = await Client.build(data).save();

      return res.send({
        status: true,
        data: { ...model.toJSON() },
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  return {
    create,
    get,
    getAll: queryAll(Client, { model: User }),
    deleteAll,
    bulkUpdate,
    update,
    deleteSingle,
    getMinMax: getMinMax(Client),
    getDistinct: getDistinct(Client),
  };
};

module.exports = ClientCtrl;
