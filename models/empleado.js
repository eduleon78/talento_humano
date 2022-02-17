var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var empleadoSchema = new Schema({
    code: Number,
    cedula: Number,
    nombre: String,
    apellido: String,
    cargo: String,
    departamento: String,
    ingreso: String,
    status: String
});

empleadoSchema.statics.createInstance = function(code, cedula, nombre, apellido, cargo, departamento, ingreso, status){
    return new this({
        code: code,
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        cargo: cargo,
        departamento: departamento,
        ingreso: ingreso,
        status: status
    });
};

empleadoSchema.methods.toString = function (){
    return 'code: ' + this.code + ' | cedula: ' + this.cedula + ' | nombre: ' + this.nombre + ' | apellido: ' + this.apellido + ' | cargo: ' + this.cargo + ' | departamento: ' + this.departamento + ' | ingreso: ' + this.ingreso + ' | status: ' + this.status;
};

empleadoSchema.statics.allEmples = function(cb){
    return this.find({}, cb);
};

empleadoSchema.statics.add = function(aEmple, cb){
    this.create(aEmple, cb);
};

empleadoSchema.statics.findByCode = function(aCode, cb){
    return this.findOne({code: aCode}, cb);
};

empleadoSchema.statics.removeByCode = function(aCode, cb){
    return this.deleteOne({code: aCode}, cb);
};


module.exports = mongoose.model('Empleado', empleadoSchema);

