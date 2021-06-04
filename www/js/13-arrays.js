'use strict';

/*
//ARRAYS (arreglos, matices...)

Es una colección de datos, de valores que puede tener una variable.
Por defecto, una variable tiene un dato. Con los arrays podemos meterle
varios datos a una sola variable.
*/

//Variables definidas normalmente:
const nombre = "Guille";
const nombre2 = "Antonio";
const nombre3 = "Federica";

//Variable definida con un array que contiene todos los datos:
const arrayNombres = ["Guille", "Antonio", "Federica"];

//Un array puede tener cualquier tipo de dato 
//(booleanos, strings, numbers, otros arrays..):
const arrayGeneral = ["Sonia", "Manuel", 31, true, ["Adriana", 44]];

//Un array también se puede definir de la siguiente forma:
//De esta manera se crea el objeto array:
const lenguajes = new Array("PHP", "Java", "C++", "JS");

//Moverse por arrays:
//Los arrays empiezan en la posición 0 (el primer valor es 0, el segundo 1...)
// "Carla" = [0]    "Jose" = [1]    "Diana" = [2]   34 = [3]    ...    
const arrayPrueba = ["Carla", "Jose", "Diana", 34, 65, "Juan"];

console.log(arrayPrueba);

//Para que nos muestre la posición 0 (Carla):
console.log(arrayPrueba[0]);
//Para que nos muestre la posición 4 (65):
console.log(arrayPrueba[4]);


console.log('*****************');
//Para mostrar cuantos elementos tiene un array con LENGTH:
console.log(arrayPrueba.length); // 6

//Ejemplo práctico:
/* 

const arrayPrueba2 = ["Julián", "Alberto", "Silvia", "Maria del Carmen"];

const elemento = parseInt(prompt("¿Qué elemento del array quieres?"));
alert(arrayPrueba2[elemento]);

 */

//Al escribir un número en el prompt, muestra el elemento elegido.
//Si se pone un nº mayor al nº de elementos, da undefined
//Para que esto no pase podemos hacer lo siguiente:

const arrayPrueba3 = ["Manolo", "Rubén", "Sandra", "Roberto"];

const elemento2 = parseInt(prompt("¿Qué elemento del array quieres?"))
if (elemento2 >= 0 && elemento2 < arrayPrueba3.length) {
    alert(`El elemento seleccionado es: ${arrayPrueba3[elemento2]}`);
} else {
    alert(`El elemento seleccionado no existe. Escoge un número menor que ${arrayPrueba3.length}`);
}