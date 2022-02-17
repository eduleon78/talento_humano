var mongoose = require('mongoose');
var Empleado = require('../../../models/empleado');

describe('Testing Empleado', function(){

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    beforeEach(function(done) {
        main().catch(err => console.log(err));

        async function main() {
        await mongoose.connect('mongodb://localhost:27017/test');
    }

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
            console.log('Wer are conected to test database!');
            done();
        });
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
      });

    afterEach(function(done) {
        Empleado.deleteMany({}, function(err, success){
            if (err) console.log(err);
            done();
        });
    });

    describe('Empleado.createInstance', () => {
        it('crea una instancia Empleado', () => {
            var emple = Empleado.createInstance(1, 14840089, "eduardo", "leon", "director", "talento humano", "diciembre 2021", "activo" );

            expect(emple.code).toBe(1);
            expect(emple.cedula).toBe(14840089);
            expect(emple.nombre).toBe("eduardo");
            expect(emple.apellido).toBe("leon");
            expect(emple.cargo).toBe("director");
            expect(emple.departamento).toBe("talento humano");
            expect(emple.ingreso).toBe("diciembre 2021");
            expect(emple.status).toBe("activo");
        })
    });

    describe('Empleado.allEmples', () => {
        it('comienza vacia', (done) => {
            Empleado.allEmples(function(err, emples){
                expect(emples.length).toBe(0);
                done();
            });
        });
    });

    describe('Empleado.add', () => {
        it('agrega solo un emple', (done) => {
            var aEmple = new Empleado({code: 1, cedula: 14840089, nombre: "eduardo", apellido: "leon", cargo: "director", departamento: "talento humano", ingreso: "diciembre 2021", status: "activo"});
            Empleado.addListener(aEmple, function(err, newEmple){
                if (err) console.log(err);
                Empleado.allEmples(function(err, emples){
                    expect(emples.length).toBe(1);
                    expect(emples[0].code).toEqual(aEmple.code);

                    done();
                });        
            });    
        });
    });

});


/* 
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
}); */