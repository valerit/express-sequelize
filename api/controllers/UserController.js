const User = require('../models').loginuser;
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');
const { onError } = require('./error');

const UserController = () => {
  const register = async (req, res) => {
    const { body } = req;

    if (body.password === body.password2) {
      delete body.password2;
      try {
        const user = await User.create(body);
        const token = authService().issue({ id: user.id });

        return res.status(200).json({
          status: true,
          data: { user, token },
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

  const getAll = async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json({ status: true, data: users });
    } catch (err) {
      return onError(req, res, err);
    }
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

  const deleteAll = async (req, res) => {
    try {
      await User.destroy({
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

  return {
    register,
    login,
    validate,
    getAll,
    deleteAll,
    bulkUpdate,
  };
};

module.exports = UserController;
