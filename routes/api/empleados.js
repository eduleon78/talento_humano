var express = require('express');
var router = express.Router();
var empleadoController = require('../../controllers/api/empleadoControllerAPI');

router.get('/', empleadoController.empleado_list);

module.exports = router;