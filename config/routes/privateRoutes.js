const privateRoutes = {
  'GET /user': 'UserController.getAll',
  'DELETE /user': 'UserController.deleteAll',
  'PUT /user': 'UserController.bulkUpdate',
  'GET /user/:id': 'UserController.get',
  'PUT /user/:id': 'UserController.update',
  'DELETE /user/:id': 'UserController.deleteSingle',

  'GET /alimentos': 'AlimentosController.getAll',
  'GET /alimentos/:id': 'AlimentosController.get',

  'POST /recetas': 'RecetasController.create',
  'GET /recetas': 'RecetasController.getAll',
  'DELETE /recetas': 'RecetasController.deleteAll',
  'PUT /recetas': 'RecetasController.bulkUpdate',
  'GET /recetas/:id': 'RecetasController.get',
  'PUT /recetas/:id': 'RecetasController.update',
  'DELETE /recetas/:id': 'RecetasController.deleteSingle',

  'POST /comidas': 'RecetasController.create',
  'GET /comidas': 'RecetasController.getAll',
  'DELETE /comidas': 'RecetasController.deleteAll',
  'PUT /comidas': 'RecetasController.bulkUpdate',
  'GET /comidas/:id': 'RecetasController.get',
  'PUT /comidas/:id': 'RecetasController.update',
  'DELETE /comidas/:id': 'RecetasController.deleteSingle',  
};

module.exports = privateRoutes;
