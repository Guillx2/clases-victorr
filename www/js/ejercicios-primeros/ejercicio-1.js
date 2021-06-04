'use strict';

/* 
EJERCICIO 1
    Programa que pida dos números (prompt) y que nos diga cual es el mayor, 
    cual es el menor o si son iguales  
*/

//Por defecto, el prompt devuelve un string.
//Para que devuelva un tipo number, usamos el parseInt.
const numA = parseInt(prompt("Dime un número."));
const numB = parseInt(prompt("Dime otro número."));

if (numA < numB) {
    alert(`${numA} es menor que ${numB}.`);

} else if (numA > numB) {
    alert(`${numA} es mayor que ${numB}.`);

} else if (numA === numB) {
    alert('Los números son iguales.');
} else {
    alert("Has introducido caracteres no aceptados.")
}