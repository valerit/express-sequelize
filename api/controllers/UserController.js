const User = require('../models').loginuser;
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

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
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
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
        console.log(err);
        return res.status(500).json({ status: false, error: 'Internal server error' });
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
      console.error(err);
      return res.status(500).json({
        status: false,
        error: 'Internal server error',
      });
    }
  };

  // const bulkUpdate = async (req, res) => {

  // };

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
      console.error(err);
      return res.status(500).json({
        status: false,
        error: 'Internal server error',
      });
    }
  };

  return {
    register,
    login,
    validate,
    getAll,
    deleteAll,
  };
};

module.exports = UserController;
