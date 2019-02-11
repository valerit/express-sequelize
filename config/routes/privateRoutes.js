const privateRoutes = {
  'GET /user': 'UserController.getAll',
  'DELETE /user': 'UserController.deleteAll',
  'PUT /user': 'UserController.bulkUpdate',
  'GET /user/:id': 'UserController.get',
  'PUT /user/:id': 'UserController.update',
  'DELETE /user/:id': 'UserController.deleteSingle',

  'GET /alimentos': 'FoodController.getAll',
  'GET /alimentos/:id': 'FoodController.get',


  'GET /recetas': 'RecipeController.getAll',
  'DELETE /recetas': 'RecipeController.deleteAll',
  'PUT /recetas': 'RecipeController.bulkUpdate',
  'GET /recetas/:id': 'RecipeController.get',
  'PUT /recetas/:id': 'RecipeController.update',
  'DELETE /recetas/:id': 'RecipeController.deleteSingle',
};

module.exports = privateRoutes;
