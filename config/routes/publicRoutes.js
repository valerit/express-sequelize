const publicRoutes = {
  'POST /user/forgot_password': 'UserController.forgotPassword',
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /status': 'StatusController.get',
};

module.exports = publicRoutes;
