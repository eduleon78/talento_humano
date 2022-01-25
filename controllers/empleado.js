var Empleado = require('../models/empleado');

exports.empleado_list = function(req, res){
    res.render('empleados/index', { emples: Empleado.allEmples});
}

exports.empleado_create_get = function(req, res){
    res.render('empleados/create');
}
exports.empleado_create_post = function(req, res){
        var emple = new Empleado(req.body.id, req.body.cedula, req.body.nombre, req.body.apellido, 
        req.body.cargo, req.body.departamento, req.body.ingreso, req.body.status);
        Empleado.add(emple);

        res.redirect('/empleados')
}

exports.empleado_update_get = function(req, res){
    var emple = Empleado.findById(req.params.id);
    
    res.render('empleados/update', {emple});
}
exports.empleado_update_post = function(req, res){
    var emple = Empleado.findById(req.body.id, req.body.cedula, req.body.nombre, req.body.apellido, 
    req.body.cargo, req.body.departamento, req.body.ingreso, req.body.status);
    emple.id = req.body.id;
    emple.cedula = req.body.cedula;
    emple.nombre = req.body.nombre;
    emple.apellido = req.body.apellido;
    emple.cargo = req.body.cargo;
    emple.departamento = req.body.departamento;
    emple.ingreso = req.body.ingreso;
    emple.status = req.body.status;


    res.redirect('/empleados')
}

exports.empleado_delete_post = function(req, res){
    Empleado.removeById(req.body.id);

    res.redirect('/empleados');
}