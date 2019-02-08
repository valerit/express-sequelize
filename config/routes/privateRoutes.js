const privateRoutes = {
  'GET /user': 'UserController.getAll',
  'DELETE /user': 'UserController.deleteAll',
  'PUT /user': 'UserController.bulkUpdate',
  'GET /user/:id': 'UserController.get',
  'PUT /user/:id': 'UserController.update',
  'DELETE /user/:id': 'UserController.deleteSingle',


  'GET /alimentos': 'FoodController.getAll',
  'GET /alimentos/:id': 'FoodController.getAll',

};

module.exports = privateRoutes;
