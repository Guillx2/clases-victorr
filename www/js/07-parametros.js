'use strict';

//PARÁMETROS

/* 
A las funciones también les podemos añadir parámetros para que sean más 
funcionales.

 */

 //Para hacer una calculadora, por ejemplo:
 //En lugar de hacer las cuentas una por una:
console.log(10+15);
console.log(20-5);
console.log(4*3);
console.log(50/2);
console.log('-----');

 //...declaramos una función con parámetros:
 function suma(num1, num2){
    console.log(num1+num2); 
 }

//Llamamos a la función indicándole los parámetros que queramos: 
suma(5, 40);
// (¡IMPORTANTE!) sin parámetros NO funciona
//Los parámetros respetan el orden: 
// En este caso: num1 = 5   num2 = 40
 

 function resta(num1,num2){
     console.log(num1-num2);
 }
 resta(50, 40);

 console.log('-----');

 //Otra forma:
 function multiplicacion(num1,num2){
     return num1*num2;
 }
 console.log(multiplicacion(5, 4)); 


console.log('------');

function calculadora(numeroA, numeroB){
    console.log(`Suma: ${numeroA+numeroB}`);
    console.log(`Resta: ${numeroA-numeroB}`);
    console.log(`Multiplicación: ${numeroA*numeroB}`);
}
    calculadora(4, 2);


