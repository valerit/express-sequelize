const Food = require('../models').alimentos;
const { onError } = require('./error');

const FoodController = () => {
  const getAll = async (req, res) => {
    try {
      const users = await Food.findAll();
      return res.status(200).json({ status: true, data: users });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const bulkUpdate = async (req, res) => {
    try {
      await Promise.all(req.body.map((user) => Food.update(user, {
        where: { id: user.id },
      })));

      const users = await Food.findAll({
        where: {
          id: {
            $in: req.body.map((user) => user.id),
          },
        },
      });

      return res.send({
        status: true,
        data: users.map((user) => user.toJSON()),
      });
    } catch (e) {
      return onError(req, res, e);
    }
  };

  const update = async (req, res) => {
    try {
      const result = await Food.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (result[0] === 0) { // Affected element count
        return res.status(404).send({
          status: false,
          error: 'food_not_found',
        });
      }

      const user = await Food.find({
        where: {
          id: req.params.id,
        },
      });

      return res.send({
        status: true,
        data: user.toJSON(),
      });
    } catch (e) {
      return onError(req, res, e);
    }
  };

  const deleteSingle = async (req, res) => {
    try {
      const user = await Food.find({
        id: req.params.id,
      });

      if (!user) {
        return res.status(404).send({
          status: false,
          error: 'food_not_found',
        });
      }
      await user.destroy();
      return res.send({
        status: true,
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const deleteAll = async (req, res) => {
    try {
      await Food.destroy({
        where: {},
        truncate: true,
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
      const user = await Food.find({
        id: req.params.id,
      });

      if (user) {
        return res.send({
          status: false,
          data: user.toJSON(),
        });
      }
      return res.status(404).send({
        status: false,
        error: 'food_not_found',
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  return {
    get,
    getAll,
    deleteAll,
    bulkUpdate,
    update,
    deleteSingle,
  };
};

module.exports = FoodController;
