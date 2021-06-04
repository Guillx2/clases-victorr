'use strict';

/* 
EJERCICIO 3
Hacer un programa que muestre todos los números entre dos números
introducidos por el usuario (prompt) 
*/
let numA = parseInt(prompt('Introduce un número'));
let numB = parseInt(prompt('Introduce otro número'));
/* 

RESUELTO POR VICTOR (solo si el numA es menor que numB)

document.write(`<h1>De ${numA} a ${numB} están estos números: <br/>`)
for(let i=numA; i <= numB; i++) {
    document.write(i+ "<br/>");
}

 */

 //AMBAS OPCIONES: si numA es mayor que numB o al revés:

//Si numA es mayor que numB...
if (numA > numB) {
    //...escribe esto
    document.write(`<h2>De ${numA} a ${numB} están estos números: <br/>`);
//Resta uno a i(numA) cada vez hasta que sea igual o mayor que numB
for(let i=numA; i>=numB; i--){
    document.write(`${i} <br/>`);
}
}else { //Si numA es menor que numB...
    document.write(`<h2>De ${numA} a ${numB} están estos números: <br/>`);
//Suma uno a i(numA) cada vez hasta que sea menor o igual que numB
for(let i=numA; i <= numB; i++) {
    document.write(i+ "<br/>");
    }
}




