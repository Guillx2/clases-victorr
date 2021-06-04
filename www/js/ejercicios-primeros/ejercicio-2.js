'use strict';

/* 
EJERCICIO 2

Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta instroducir un número negativo y ahí mostrar el resultado 

*/
/* 
let suma = 0; //Asignamos una variable a 0 para la suma 
let contador = 0; //Asignamos otra para el número de veces que el usuario inserte números


do{
    let numero = (prompt('Introduce varios números y, cuando quieras, introduce un número negativo:'));

    //Con esto decimos que: Si "número" no es un número (si se introduce una letra, por ejemplo)...
    if (isNaN(numero)){
    //...entonces ese caracter se tranformará en 0
        numero = 0; 
    }else if (numero >= 0) {
        suma = suma + numero// suma = suma + numero;

        contador++;
    } 
        console.log(suma);
        console.log(numero);
    // Salir del bucle si el número es menor que 0 (negativo)
} while(numero < 0);

alert(`La suma de todos los números es: ${suma}`);
alert(`La media de todos los números es: ${suma/contador}`);

NO FUNCIONA POR EL VAR NUMERO
 */

let suma = 0;
let contador = 0;

do {
    var numero = parseInt(prompt('Indica números'));

    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;

        contador++;
    }

    console.log(suma);
    console.log(contador);

} while (numero >= 0);

alert("La suma es: "+suma);
alert("la media es: "+ (suma/contador));