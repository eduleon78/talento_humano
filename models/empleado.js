var Empleado = function(id, cedula, nombre, apellido, cargo, departamento, ingreso, status) {
    this.id = id;
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.departamento = departamento;
    this.ingreso = ingreso;
    this.status = status; 
}

Empleado.prototype.toString = function (){
    return 'id: ' + this.id + " | cedula: " + this.cedula + " | nombre: " + this.nombre + " | apellido: " + 
    this.apellido + " | cargo: " + this.cargo + " | departamento: " + thisd.departamento + " | ingreso: " + this.ingreso + " | status: " + this.status;
}

Empleado.allEmples = [];
Empleado.add = function(aEmple){
    Empleado.allEmples.push(aEmple);
}

Empleado.findById = function(aEmpleId){
    var aEmple = Empleado.allEmples.find(x => x.id == aEmpleId);
    if (aEmple)
        return aEmple;
    else
        throw new Error(`No existe un empleado con el id ${aEmpleId}`);
}

Empleado.removeById = function(aEmpleId){
    for(var i = 0; i < Empleado.allEmples.length; i++){
        if (Empleado.allEmples[i].id == aEmpleId){
            Empleado.allEmples.splice(i, 1);
            break;
        }
    }
}

/* 
var a = new Empleado(1, 14840089, 'Eduardo', 'leon', 'director', 'personal', 'diciembre 2021', 'activo' );
var b = new Empleado(2, 21323925, 'Pedro', 'Perez','coodinador', 'seguridad', 'diciembre 2021', 'activo' );

Empleado.add(a);
Empleado.add(b); */

module.exports = Empleado;