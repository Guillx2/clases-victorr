'use strict';

/*
EJERCICIO 6

Programa que nos diga si un número introducido es par o impar. Si no es válido (letras, simbolos), que nos vuelva a pedir un número.

*/

let number = parseInt(prompt("Introduce un número:"));

while(isNaN(number)){
    number = parseInt(prompt("Introduce un número:"));
}
if (number % 2 === 0){
    alert(`El ${number} es par.`);
} else {
    alert(`El ${number} es impar.`);
}
