'use strict';

//FUNCIONES ANÓNIMAS

/* Son funciones que no tienen nombre y se puede guardar dentro de una variable.
Se suele utilizar para hacer frameworks (jQuery...), callbacks, etc.


Un callback es una función que se ejecuta dentro de otra.

*/

//Ejemplo de función anónima. Le añadimos el parámetro "nombre", por ejemplo:
let pelicula = function(nombre) {
    return `La película es: ${nombre}`;
}
console.log(pelicula("El Señor de los Anillos."));



/* 
//CALLBACKS
Una función de callback es una función anónima que se le pasa como
parámetro a otra función. 
*/
//Esto es una función normal:
function suma(numA,numB){
    let sumar = numA + numB;

    return sumar;
}

//Función Callback:
function sumame(numero1,numero2,sumaYmuestra,sumaDosVeces){
    let sumar2 = numero1 + numero2;

    sumaYmuestra(sumar2);
    sumaDosVeces(sumar2);

    return sumar2;
}

sumame(5,7, function(dato){
    console.log(`La suma es: ${dato}`);
},
function(dato){
    console.log(`La multiplicación es: ${dato*2}`);
});

/* 
Tenemos una función con varios parámetros normales (numero1 y numero2).
Y después tenemos otros dos parámetros que en realidad son funciónes
anónimas.
El "dato" se lo pasamos en el llamado "sumaYmuestra(sumar2)", 
sumaDosVeces(sumar2).
"dato" = "sumar2"

En definitiva: cuando se ejecuta la función principal, dentro de esta
se ejecuta también una función de callback.
*/




