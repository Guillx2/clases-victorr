'use strict';

// CONDICIONAL IF...ELSE
//Si A es igual/diferente/mayor (etc.) que  B, entonces haz algo.


let edad1 = 30;
let edad2 = 12;

//Si pasa esto...
if(edad1 > edad2) {
    //...ejecuta esto:
    console.log('La edad1 es mayor que la edad2.')
//Y si la condición no se cumple...
} else {
    //...ejecuta esto:
    console.log('La edad1 es menor que la edad2.')
}

console.log('-----'); //Esto es sólo para separar los ejemplos
//Otro ejemplo:

let edad = 17;
const nombre = 'Guille';

if(edad >= 18) {
    console.log(`${nombre} tiene ${edad} años. Es mayor de edad.`)
    //También podemos meter otro if...else dentro de este para "completarlo":
        if(edad <= 33) {
            console.log('Todavía eres millenial :P.')
        } else if (edad >= 70) {
            console.log('Eres anciano :S.')
        } else {
            console.log('Ya no eres millenial :(.')
        }
} else {
    console.log(`${nombre} tiene ${edad} años. Es menor de edad.`)
}

console.log('-----');
/*
Operadores lógicos:
    AND(Y): &&
    OR(O): ||
    Negación: !
*/


//Ejemplos con operadores lógicos:

let year = 2050;

    //AND:

if (year >= 2000 && year <= 2020) {
    console.log('Estamos en la era actual.')
} else {
    console.log('Estamos en la era post moderna :O.')
}

console.log('-----');
    //OR:

//Si year es igual a 2008 o menor o igual a 2020..
if (year === 2008 || year <= 2020) {
    //...ejecuta esto:
    console.log(`Estamos entre 2008 y 2020`);
} else {
    console.log('No estamos entre 2008 y 2020.')
}

console.log('-----');
    //Negación:

//Si year NO es igual a 2016...
if (year !== 2016) {
    //...ejecuta esto:
    console.log(`El año no es 2016, es ${year}.`)
}

console.log('-----');




    
