const privateRoutes = {
  'GET /user': 'UserController.getAll',
  'GET /user/:id': 'UserController.get',
  'PUT /user/:id': 'UserController.update',
  'DELETE /user': 'UserController.deleteAll',
  'PUT /user': 'UserController.bulkUpdate',
};

module.exports = privateRoutes;
