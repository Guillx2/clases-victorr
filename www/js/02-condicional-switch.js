'use strict';

//CONDICIONAL SWITCH:

let edad = 18;
//Declaramos una variable vacía para no tener que hacer un console.log de 
//cada condición:
let consola = "";

switch(edad) {
    case 18:
        consola = 'Tienes 18 años.';
    break;

    case 25: 
        consola = 'Tienes 25 años.';
    break;

    case 40:
        consola = 'Tienes 40 años.';
    break;

    case 75:
        consola = 'Tienes 75 años.';
    break;
    
    default: 
        consola = 'No se reconoce esa edad.';
    break;
    }

    console.log(consola);