'use strict';

/*
EJERCICIO 8
Hacer una calculadora:
    -Que pida dos números por pantalla.
    -Si metemos uno mal, que los vuelva a pedir.
    -Que muestre el resultado en el cuerpo de la página, 
    en una alerta y por consola.
    -Tiene que poder sumar, restar, multiplicar y dividir.
*/

let numA = parseInt(prompt("Inserte el primer número:"));
let numB = parseInt(prompt("Inserte el segundo número:"));
let operador = prompt("Inserte el operador:");

while (isNaN(numA)) {
    numA = parseInt(prompt("Inserte el primer número:"));
}
while (isNaN(numB)) {
    numB = parseInt(prompt("Inserte el segundo número:"));
}

if (operador === '+'){
    document.write(numA+numB);
    alert(numA+numB);
    console.log(numA+numB);
} else if (operador === '-'){
    document.write(numA-numB)
    alert(numA-numB);
    console.log(numA-numB);
} else if (operador === '*'){
    document.write(numA*numB);
    alert(numA*numB);
    console.log(numA*numB);
} else if (operador === '/'){
    if (numB === 0){
        document.write("No se puede dividir entre 0");
        alert("No se puede dividir entre 0.");
        console.log("No se puede dividir entre 0");
    } else {
        document.write(numA/numB);
        alert(numA/numB);
        console.log(numA/numB);
    }
}

