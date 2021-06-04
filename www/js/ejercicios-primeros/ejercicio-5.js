'use strict';

/* 
EJERCICIO 5
Mostrar todos los números divisores de un número introducido por prompt.
*/

let numero = parseInt(prompt("Introduce un número:"));

for (let i=1;i <= numero; i++){
    if (numero % i === 0) {
        document.write(`<h1>El ${i} es divisor de ${numero}.</h1><br/>`);
    }
}