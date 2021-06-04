'use strict';

//BUCLE FOR
//Un bucle es una estructura de control que se repite varias veces.

//Vamos a hacer un bucle que recorra los números del 1 al 10
//Esta ¡¡¡NO!!! es la manera:
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//Este console.log es sólo para hacer una separación. No tiene valor.
console.log('-----');

//Esta es la forma correcta, utilizando un bucle:
for (let i=0; i <= 10; i++) {
console.log(i);
}
/* 
EXPLICACIÓN:
i es igual a 0 (en este caso), por lo que el bucle empieza en 0.
Mientras que i sea menor o igual que 10, súmale 1: 
El bucle empieza en 0. 0 es menor que 10. i=0+1.
Ahora i vale 1. 1 es menor que 10. i=1+1.
Ahora i vale 2. 2 es menor que 10. i=2+1.
Y así hasta llegar a 10. Cuando llegue a 10, finaliza el bucle.
*/

console.log('-----');
//Otro ejemplo:
//Recorrer los números del 1 al 100:

let numero = 100;
for(let i = 0; i <= numero; i++) {
    console.log(`Vamos por el número ${i}.`);
}

console.log('-----');
//Otro ejemplo:
//Recorrer los números del 50 al 100 de 5 en 5.

let numero2 = 100;
for (let i = 50; i <= numero2; i+=5) {
    console.log(i);
}