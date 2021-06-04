'use strict';

//FUNCIONES
/*
Las funciones son un grupo de órdenes agrupadas con  un nombre 
concreto y que van a funcionar siempre que las llamemos.
Es decir, en una función podemos tener un conjunto de reglas, de funciones,
de cosas etc. que se van a ejecutar para poder utilizarlas tantas veces como 
queramos.

Otra definición:
Una función es una agrupación o un conjunto de instrucciones que hacen 
cosas y que podremos usar (llamándola) siempre que la necesitemos.
Alert, prompt o console.log son ejemplos de funciones (ya predefinidas por JS).
*/


//Como crear dos funciónes, ("calculadora" y "reloj", por ejemplo):

function calculadora (){
    return "Hola soy la calculadora.";
}
function reloj (){
    return "Hola soy el reloj."
}

//Las llamamos las veces que queramos:

console.log(calculadora());
console.log(reloj());
console.log(calculadora(),calculadora());
console.log(reloj(), calculadora(), reloj(), reloj());

//También se puede poner el console.log en el sitio del return, así cada vez
//que llamemos a la función, ya ejecutará el console.log:

function rotulador(){
    console.log("Soy el rotulador azul");
    console.log("¿O soy el rojo?");
}
//La llamamos e imprimirá los 2 console.log:
rotulador();
//De esta forma también la podemos llamar las veces que queramos:
rotulador();
rotulador();
rotulador();

console.log('-----');

//También se pueden asignar las funciones a una variable:
let miFuncion1 = calculadora();
let miFuncion2 = reloj();
let miFuncion3 = rotulador();


console.log(miFuncion1, miFuncion2);



