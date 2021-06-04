/* 
EJERCICIO 1 CON UN EXTRA:
    Programa que pida dos números (prompt) y que nos diga cual es el mayor, 
    cual es el menor o si son iguales.
    
    EXTRA: Si no se introduce un caracter aceptado (número), o son iguales 
    o menores que 0, vuelve a preguntar hasta que se inserte un número aceptado.
*/

//Por defecto, el prompt devuelve un string.
//Para que devuelva un tipo number, usamos el parseInt.
let numA = parseInt(prompt("Dime un número."));
let numB = parseInt(prompt("Dime otro número."));

//EXTRA:
//NaN = Not a Number
//isNaN = si no se inserta un número...
//esto quiere decir:
//si numA/numB es menor o igual a cero o no son un número...
while (numA <= 0 || numB <= 0 || isNaN(numA) || isNaN(numB)) {
    numA = parseInt(prompt("Dime un número."));
    numB = parseInt(prompt("Dime otro número."));
}



if (numA < numB) {
    alert(`${numA} es menor que ${numB}.`);

} else if (numA > numB) {
    alert(`${numA} es mayor que ${numB}.`);

} else if (numA === numB) {
    alert('Los números son iguales.');
} else {
    alert("Has introducido caracteres no aceptados.")
  
}