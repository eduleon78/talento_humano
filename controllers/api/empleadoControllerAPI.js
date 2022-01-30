var Empleado = require('../../models/empleado');

exports.empleado_list = function(req, res){
    res.status(200).json({
        empleados: Empleado.allEmples
    });
}