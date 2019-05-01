const Models = require('../models');

const User = Models.loginuser;

const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');
const { onError } = require('./error');
const { USER_TYPES } = require('../../config/constants');
const { getMinMax, getDistinct, queryAll } = require('./common');
const EmailCtrl = require('./email');

const { PROFESSIONAL, CLIENT } = USER_TYPES;
const { clientes, profesionales } = Models;

const UserController = () => {
  const register = async (req, res) => {
    const { body } = req;

    if (body.password === body.password2) {
      delete body.password2;
      try {
        const userData = { ...body };

        // to create professionales and clients
        // // Remove professional
        // delete userData.profesionale;
        // delete userData.cliente;

        const user = await User.create(userData);

        // let exUser;
        // if (userData.user_type_id === PROFESSIONAL) {
        //   exUser = await profesionales.create(body.profesionale);
        // } else if (userData.user_type_id === CLIENT) {
        //   exUser = await clientes.create(body.cliente);
        // }

        const token = authService().issue({ id: user.id });

        const resp = user.toJSON();

        // if (userData.user_type_id === PROFESSIONAL) {
        //   resp.profesionale = exUser.toJSON();
        // } else if (userData.user_type_id === CLIENT) {
        //   resp.cliente = exUser.toJSON();
        // }

        return res.status(200).json({
          status: true,
          data: { user: resp, token },
        });
      } catch (err) {
        onError(req, res, err);
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };

  const login = async (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
      try {
        const user = await User
          .findOne({
            where: {
              username,
            },
          });

        if (!user) {
          return res.status(400).json({ status: false, error: 'Bad Request: User not found' });
        }

        if (bcryptService().comparePassword(password, user.password)) {
          const token = authService().issue({ id: user.id });

          return res.status(200).json({ status: true, data: { token, user } });
        }

        return res.status(401).json({ status: false, error: 'Unauthorized' });
      } catch (err) {
        onError(req, res, err);
      }
    }

    return res.status(400).json({ status: false, error: 'Bad Request: username or password is wrong' });
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ status: false, error: 'Invalid Token!' });
      }

      return res.status(200).json({ status: true });
    });
  };

  const bulkUpdate = async (req, res) => {
    try {
      await Promise.all(req.body.map((user) => User.update(user, {
        where: { id: user.id },
      })));

      const users = await User.findAll({
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
      const result = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (result[0] === 0) { // Affected element count
        return res.status(404).send({
          status: false,
          error: 'user_not_found',
        });
      }

      const user = await User.find({
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
      const user = await User.find({
        where: {
          id: req.params.id,
        },
      });

      if (!user) {
        return res.status(404).send({
          status: false,
          error: 'user_not_found',
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
      await User.destroy({
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
      const user = await User.find({
        where: { id: req.params.id },
      });

      if (user) {
        return res.send({
          status: true,
          data: user.toJSON(),
        });
      }
      return res.status(404).send({
        status: false,
        error: 'user_not_found',
      });
    } catch (err) {
      return onError(req, res, err);
    }
  };

  const forgetPassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(404).send({
        status: false,
        error: 'user_not_found',
      });
    }

    await EmailCtrl.send(user.email, 'Forget Password', 'Test Text');
    return res.send({
      status: true,
    });
  };

  return {
    get,
    register,
    login,
    validate,
    getAll: queryAll(User),
    deleteAll,
    bulkUpdate,
    update,
    deleteSingle,
  };
};

module.exports = UserController;
