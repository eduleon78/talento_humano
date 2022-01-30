var Empleado = require('../../../models/empleado');

beforeEach(() => { Empleado.allEmples = []; });

describe('Empledo.allEmples', () => {
    it('comienza vacia', () => {
        expect(Empleado.allEmples.length).toBe(0);
    });
});

describe('Empleado.add', () => {
    it('agregamos uno', () => {
        expect(Empleado.allEmples.length).toBe(0);

        var a = new Empleado(1, 14840089, 'Eduardo', 'leon', 'director', 'personal', 'diciembre 2021', 'activo' );
        Empleado.add(a);

        expect(Empleado.allEmples.length).toBe(1);
        expect(Empleado.allEmples[0]).toBe(a);


    });
});

describe('Empleado.findById', () => {
    it('debe devolver el emple con id 1', () => {
        expect(Empleado.allEmples.length).toBe(0);
        var aEmple = new Empleado(1, 14840089, 'Eduardo', 'leon', 'director', 'personal', 'diciembre 2021', 'activo' );
        var aEmple2 = new Empleado(2, 12920708, 'sonyram', 'acosta', 'director', 'desarrollo', 'diciembre 2021', 'activo' );
        Empleado.add(aEmple);
        Empleado.add(aEmple2);

        var targetEmple = Empleado.findById(1);
        expect(targetEmple.id).toBe(1);
        expect(targetEmple.cedula).toBe(aEmple.cedula);
        expect(targetEmple.nombre).toBe(aEmple.nombre);
        expect(targetEmple.apellido).toBe(aEmple.apellido);
        expect(targetEmple.cargo).toBe(aEmple.cargo);
        expect(targetEmple.departamento).toBe(aEmple.departamento);
        expect(targetEmple.ingreso).toBe(aEmple.ingreso);
        expect(targetEmple.status).toBe(aEmple.status);
    });
});