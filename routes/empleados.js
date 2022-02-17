var express = require('express');
var router = express.Router();
var empleadoController = require('../controllers/empleado');

router.get('/', empleadoController.empleado_list);
router.get('/create', empleadoController.empleado_create_get);
router.post('/create', empleadoController.empleado_create_post);
router.get('/:id/update', empleadoController.empleado_update_get);
router.post('/:id/update', empleadoController.empleado_update_post);
router.post('/:id/delete', empleadoController.empleado_delete_post);

module.exports = router;