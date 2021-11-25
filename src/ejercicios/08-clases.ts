/*
    ===== Código de TypeScript =====
*/
// Clases

class PersonaNormal {
    constructor( 
        public nombre: string, 
        public direccion: string 
        ){}
}
class Heroe extends PersonaNormal {
    /* alterEgo: string; //Private: Solo sera visible dentro de esta clase
    edad: number; //Public: Afuera de la clase alguien va a poder ver esta propiedad
    nombreReal: number; //Static: Poder acceder al valor de esta propiedad sin crear una instancia de la clase */
    
    constructor(
        //Asigna a la clase sus propiedades en base a sus argumentos
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ){
            super(nombreReal, 'New York');
        }
}

const iroman = new Heroe('Iroman', 45, 'Tony');
console.log(iroman);