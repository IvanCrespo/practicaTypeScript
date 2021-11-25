/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Ivan'
}

const pasajero2: Pasajero = {
    nombre:'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero):void {
    const cuantoHijos = pasajero.hijos?.length || 0;
    console.log(cuantoHijos);
}

imprimeHijos(pasajero2);