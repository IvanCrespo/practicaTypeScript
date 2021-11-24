/*
    ===== Código de TypeScript =====
*/
function sumar (a: number, b: number){
    return a + b;
    /*return (a + b).toString();*/
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

/* const resultado = multiplicar(5, 0, 10);
console.log(resultado); */

interface PersonajeCSGO {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeCSGO, curarX: number ): void {
    personaje.pv += curarX;
    // console.log(personaje);
}

const nuevoPersonaje: PersonajeCSGO = {
    nombre: 'Prueba',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv );
    }
}

curar( nuevoPersonaje, 20 );
nuevoPersonaje.mostrarHp();
