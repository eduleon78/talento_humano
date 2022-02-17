const empleado = require('../models/empleado');
var Empleado = require('../models/empleado');

exports.empleado_list = function(req, res){
    Empleado.allEmples().exec((err, emples) => {
        res.render('empleados/index', { emples});
    });    
}

exports.empleado_create_get = function(req, res){
    res.render('empleados/create');
}

exports.empleado_create_post = function(req, res){
    var emple = new Empleado({
        code: req.body.code, 
        cedula: req.body.cedula, 
        nombre: req.body.nombre, 
        apellido: req.body.apellido, 
        cargo: req.body.cargo, 
        departamento: req.body.departamento, 
        ingreso: req.body.ingreso, 
        status: req.body.status
    });
    Empleado.add(emple);
    res.redirect('/empleados');
}

exports.empleado_update_get = function(req, res){
    console.log("req.params", req.params)
    Empleado.findById(req.params.id).exec((err, emple) => {
        res.render('empleados/update', {emple});
    });
}

exports.empleado_update_post = function(req, res){
    var update_values = { 
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        ingreso: req.body.ingreso,
        status: req.body.status
    }; 
    Empleado.findByIdAndUpdate(req.params.id, update_values, (err, empleado) => {
        if (err) {
            console.log(err);
            res.render('empleados/update', {errors: err.errors, empleado})
        }else{
            res.redirect('empleados');
            return;
        }

    });

}

exports.empleado_delete_post = function(req, res){
    Empleado.findByIdAndDelete(req.body.id, (err) => {
        if (err){
            next(err);
        }else{
            res.redirect('/empleados')
        }
    });
}