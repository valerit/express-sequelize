const privateRoutes = {
  'GET /user': 'UserController.getAll',
  'DELETE /user': 'UserController.deleteAll',
  'PUT /user': 'UserController.bulkUpdate',
  'GET /user/:id': 'UserController.get',
  'PUT /user/:id': 'UserController.update',
  'DELETE /user/:id': 'UserController.deleteSingle',

  'POST /clientes': 'ClientCtrl.create',
  'GET /clientes': 'ClientCtrl.getAll',
  'POST /clientes/query': 'ClientCtrl.getAll',
  'DELETE /clientes': 'ClientCtrl.deleteAll',
  'PUT /clientes': 'ClientCtrl.bulkUpdate',
  'GET /clientes/:id': 'ClientCtrl.get',
  'PUT /clientes/:id': 'ClientCtrl.update',
  'DELETE /clientes/:id': 'ClientCtrl.deleteSingle',

  'GET /alimentos': 'AlimentosController.getAll',
  'POST /alimentos': 'AlimentosController.create',
  'POST /alimentos/query': 'AlimentosController.getAll',
  'GET /alimentos/min_max': 'AlimentosController.getMinMax', // TODO: rename min_max in the future
  'GET /alimentos/distinct': 'AlimentosController.getDistinct',
  'GET /alimentos/:id': 'AlimentosController.get',

  'GET /user_alimentos': 'UserAlimentosCtrl.getAll',
  'POST /user_alimentos': 'UserAlimentosCtrl.create',
  'POST /user_alimentos/query': 'UserAlimentosCtrl.getAll',
  'GET /user_alimentos/min_max': 'UserAlimentosCtrl.getMinMax', // TODO: rename min_max in the future
  'GET /user_alimentos/distinct': 'UserAlimentosCtrl.getDistinct',
  'GET /user_alimentos/:id': 'UserAlimentosCtrl.get',
  'PUT /user_alimentos/:id': 'UserAlimentosCtrl.update',

  'POST /recetas': 'RecetasController.create',
  'GET /recetas': 'RecetasController.getAll',
  'DELETE /recetas': 'RecetasController.deleteAll',
  'PUT /recetas': 'RecetasController.bulkUpdate',
  'GET /recetas/min_max': 'RecetasController.getMinMax', // TODO: rename min_max in the future
  'GET /recetas/distinct': 'RecetasController.getDistinct',
  'POST /recetas/:id/clone': 'RecetasController.clone',
  'GET /recetas/:id': 'RecetasController.get',
  'PUT /recetas/:id': 'RecetasController.update',
  'DELETE /recetas/:id': 'RecetasController.deleteSingle',

  'POST /comidas': 'ComidasController.create',
  'GET /comidas': 'ComidasController.getAll',
  'DELETE /comidas': 'ComidasController.deleteAll',
  'PUT /comidas': 'ComidasController.bulkUpdate',
  'GET /comidas/min_max': 'ComidasController.getMinMax', // TODO: rename min_max in the future
  'GET /comidas/distinct': 'ComidasController.getDistinct', // TODO: rename min_max in the future
  'GET /comidas/:id': 'ComidasController.get',
  'PUT /comidas/:id': 'ComidasController.update',
  'DELETE /comidas/:id': 'ComidasController.deleteSingle',

  'POST /menu_dia': 'MenuDiaController.create',
  'GET /menu_dia': 'MenuDiaController.getAll',
  'DELETE /menu_dia': 'MenuDiaController.deleteAll',
  'PUT /menu_dia': 'MenuDiaController.bulkUpdate',
  'GET /menu_dia/min_max': 'MenuDiaController.getMinMax', // TODO: rename min_max in the future
  'GET /menu_dia/distinct': 'MenuDiaController.getDistinct',
  'GET /menu_dia/:id': 'MenuDiaController.get',
  'PUT /menu_dia/:id': 'MenuDiaController.update',
  'DELETE /menu_dia/:id': 'MenuDiaController.deleteSingle',

  'POST /plan_semanal': 'PlanSemanalController.create',
  'GET /plan_semanal': 'PlanSemanalController.getAll',
  'DELETE /plan_semanal': 'PlanSemanalController.deleteAll',
  'PUT /plan_semanal': 'PlanSemanalController.bulkUpdate',
  'GET /plan_semanal/min_max': 'PlanSemanalController.getMinMax', // TODO: rename min_max in the future
  'GET /plan_semanal/distinct': 'PlanSemanalController.getDistinct', // TODO: rename min_max in the future
  'GET /plan_semanal/:id': 'PlanSemanalController.get',
  'PUT /plan_semanal/:id': 'PlanSemanalController.update',
  'DELETE /plan_semanal/:id': 'PlanSemanalController.deleteSingle',
};

module.exports = privateRoutes;
