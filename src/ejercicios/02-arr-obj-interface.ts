/*
    ===== Código de TypeScript =====
*/
// Arreglo
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

habilidades.push('Hola');

// Objetos y Interfaces

interface  Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Ivan',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);