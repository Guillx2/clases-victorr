'use strict';

/* 
EJERCICIO 4:
Mostrar todos los números impares que hay entre dos números
introducidos por el usuario.

 */

 let numA = parseInt(prompt('Escribe el primer número:'));
 let numB = parseInt(prompt('Escribe el segundo número:'));

 
if (numA > numB) {
    document.write(`<h2>De ${numA} a ${numB} están estos números impares: <br/>`);
for(let i=numA; i>=numB; i--){
    if (i % 2 !== 0){
    document.write(`El ${i} es impar.<br/>`);
}
}
}else { 
    document.write(`<h2>De ${numA} a ${numB} están estos números: <br/>`);
for(let i=numA; i <= numB; i++) {
    if (i % 2 !== 0) {
    document.write(`El ${i} es impar.<br/>`);
}
    }
}

/* 
//SOLUCIÓN VICTOR:

let numero1 = parseInt(prompt("Introduce el primer número:"));
let numero2 = parseInt(prompt("Introduce el segundo número:"));

while(numero1 < numero2){
    numero1++;
    if(numero1 % 2 !== 0){
        console.log(("El "+numero1+" es impar"));
    }
}

 */