const privateRoutes = {
  'GET /user': 'UserController.getAll',
  'DELETE /user': 'UserController.deleteAll',
  'PUT /user': 'UserController.bulkUpdate',
  'GET /user/:id': 'UserController.get',
  'PUT /user/:id': 'UserController.update',
  'DELETE /user/:id': 'UserController.deleteSingle',

  'GET /alimentos': 'AlimentosController.getAll',
  'POST /alimentos/query': 'AlimentosController.getAll',
  'GET /alimentos/min_max': 'AlimentosController.getFieldValue', // TODO: rename min_max in the future
  'GET /alimentos/:id': 'AlimentosController.get',

  'POST /recetas': 'RecetasController.create',
  'GET /recetas': 'RecetasController.getAll',
  'DELETE /recetas': 'RecetasController.deleteAll',
  'PUT /recetas': 'RecetasController.bulkUpdate',
  'GET /recetas/min_max': 'RecetasController.getFieldValue', // TODO: rename min_max in the future
  'GET /recetas/:id': 'RecetasController.get',
  'PUT /recetas/:id': 'RecetasController.update',
  'DELETE /recetas/:id': 'RecetasController.deleteSingle',

  'POST /comidas': 'ComidasController.create',
  'GET /comidas': 'ComidasController.getAll',
  'DELETE /comidas': 'ComidasController.deleteAll',
  'PUT /comidas': 'ComidasController.bulkUpdate',
  'GET /comidas/min_max': 'ComidasController.getFieldValue', // TODO: rename min_max in the future
  'GET /comidas/:id': 'ComidasController.get',
  'PUT /comidas/:id': 'ComidasController.update',
  'DELETE /comidas/:id': 'ComidasController.deleteSingle',

  'POST /menu_dia': 'MenuDiaController.create',
  'GET /menu_dia': 'MenuDiaController.getAll',
  'DELETE /menu_dia': 'MenuDiaController.deleteAll',
  'PUT /menu_dia': 'MenuDiaController.bulkUpdate',
  'GET /menu_dia/min_max': 'MenuDiaController.getFieldValue', // TODO: rename min_max in the future
  'GET /menu_dia/:id': 'MenuDiaController.get',
  'PUT /menu_dia/:id': 'MenuDiaController.update',
  'DELETE /menu_dia/:id': 'MenuDiaController.deleteSingle',

  'POST /plan_semanal': 'PlanSemanalController.create',
  'GET /plan_semanal': 'PlanSemanalController.getAll',
  'DELETE /plan_semanal': 'PlanSemanalController.deleteAll',
  'PUT /plan_semanal': 'PlanSemanalController.bulkUpdate',
  'GET /plan_semanal/min_max': 'PlanSemanalController.getFieldValue', // TODO: rename min_max in the future
  'GET /plan_semanal/:id': 'PlanSemanalController.get',
  'PUT /plan_semanal/:id': 'PlanSemanalController.update',
  'DELETE /plan_semanal/:id': 'PlanSemanalController.deleteSingle',
};

module.exports = privateRoutes;
