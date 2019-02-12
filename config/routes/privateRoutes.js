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

  'POST /comidas': 'ComidasController.create',
  'GET /comidas': 'ComidasController.getAll',
  'DELETE /comidas': 'ComidasController.deleteAll',
  'PUT /comidas': 'ComidasController.bulkUpdate',
  'GET /comidas/:id': 'ComidasController.get',
  'PUT /comidas/:id': 'ComidasController.update',
  'DELETE /comidas/:id': 'ComidasController.deleteSingle',

  'POST /menu_dia': 'MenuDiaController.create',
  'GET /menu_dia': 'MenuDiaController.getAll',
  'DELETE /menu_dia': 'MenuDiaController.deleteAll',
  'PUT /menu_dia': 'MenuDiaController.bulkUpdate',
  'GET /menu_dia/:id': 'MenuDiaController.get',
  'PUT /menu_dia/:id': 'MenuDiaController.update',
  'DELETE /menu_dia/:id': 'MenuDiaController.deleteSingle',

  'POST /plan_semanal': 'MenuDiaController.create',
  'GET /plan_semanal': 'MenuDiaController.getAll',
  'DELETE /plan_semanal': 'MenuDiaController.deleteAll',
  'PUT /plan_semanal': 'MenuDiaController.bulkUpdate',
  'GET /plan_semanal/:id': 'MenuDiaController.get',
  'PUT /plan_semanal/:id': 'MenuDiaController.update',
  'DELETE /plan_semanal/:id': 'MenuDiaController.deleteSingle',  
};

module.exports = privateRoutes;
