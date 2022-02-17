const express = require('express');
const router = express.Router();

var empleadoController = require('../../controllers/api/empleadoControllerAPI');

router.get('/', empleadoController.empleado_list);
router.post('/create', empleadoController.empleado_create);
router.delete('/delete', empleadoController.empleado_delete);


module.exports = router;