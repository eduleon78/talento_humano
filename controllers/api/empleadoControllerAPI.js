const Empleado = require('../../models/empleado');

exports.empleado_list = function (req, res) {
    Empleado.allEmples(function(err, emples){
      res.status(200).json({
        empleados: emples
      });
    });  
};
  
exports.empleado_create = function (req, res) {
  let emple = Empleado.createIntance(req.body.code, req.body.cedula, req.body.nombre, req.body.apellido,
    req.body.cargo, req.body.departamento, req.body.ingreso, req.body.status);

  Empleado.add(emple, function(err, newEmple){
    res.status(200).json({
      empleado: emple,
    });
  });  
};

exports.empleado_delete = function (req, res) {
  Empleado.removeByCode(req.body.code, function(err, emple){
    res.status(204).send();
  });
};

exports.empleado_update_post = function (req, res) {
  //let body = _.pick(req.body, ['color', 'modelo', 'code'])
  const id = req.params.id;
  Empleado.findOneAndUpdate(
    id,
    req.body, {
      new: true
    },
    (err, empleBD) => {
      if (err) {
        return res.status(404).json({
          ok: false,
          error: {
            message: `No se encuentra un empleado con id: ${req.params.id}`,
            err
          }
        })
      }
      return res.status(200).json({
        empleado: empleBD
      })
    })
}