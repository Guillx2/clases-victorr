'use strict';

//MÉTODOS PARA TRANSFORMAR TEXTOS 

let numero = 473;
const texto1 = "Este es un curso de JavaScript.";
const texto2 = "Estoy APRENDIENDO JavaScript."

//Cambiamos el type number de "numero" a string con una función:
console.log(numero.toString());

//O lo podemos asignar a una variable:
let dato = numero.toString();

//Y ejecutar esa variable en un console.log:
console.log(dato);

//Comprobamos que ahora es de tipo string:
console.log(typeof dato);

console.log('**********************');

//Cambiamos el texto1 a MAYÚSCULAS con el método "toUpperCase":
const textoMayus = texto1.toUpperCase();

console.log(textoMayus);

//Cambiamos el texto2 a minúsculas con la función "toLowerCase":
const textoMinus = texto2.toLowerCase();

console.log(textoMinus);

console.log('**********************');

//Comprobamos la LONGITUD que tiene un TEXTO con la propiedad .length:
//(¡¡¡Esto también cuenta los espacios!!!)
const nombre1 = ""; 
const nombre2 = "Ana";
const nombre3 = "Esteban Manuel Jesús de Todos los Santos Rodriguez";

console.log(nombre1.length); // 0
console.log(nombre2.length); // 3
console.log(nombre3.length); // 50

console.log('**********************');



//En el caso de los Arrays, .length cuenta la cantidad de elementos:
const arrayPrueba = ["Manuel", "David", "Sandra", "Mónica"];

console.log(arrayPrueba.length); // 4

console.log('**********************');




//Buscar palabras y/o letras dentro de un string con INDEXOF()
//Esto empieza a contar en 0 (La primera letra es 0). Los espacios cuentan.
const otroTexto1 = "Este es un texto de prueba."
const otroTexto2 = "Este es otro texto de prueba."

const busqueda = otroTexto1.indexOf("d");
const busqueda2 = otroTexto2.indexOf("otro");

console.log(busqueda); // "d" está en el caracter 17.
console.log(busqueda2); // La palabra "otro" empieza en el caracter 8.




//Si hay varias palabras iguales podemos usar LASTINDEXOF() para encontrar 
//la que esté en la última posición:
const otroTexto3 = "Texto: en este texto, escribo texto 3 veces."

const busqueda3 = otroTexto3.lastIndexOf("texto");

console.log(busqueda3); // Busca el último "texto" (posición 30)




//Reemplazar una palabra por otra con REPLACE
const otroTexto4 = "Y otro texto más por aquí.";
    //cambiamos aquí por allí:
const cambiarPalabra = otroTexto4.replace("aquí", "allí");

console.log(cambiarPalabra);




//Crear un array del texto con SPLIT:
const otroTexto5 = "Bienvenidos a este curso de JavaScript."

const hacerArray = otroTexto5.split();
const hacerArray2 = otroTexto5.split(" ");

console.log(hacerArray); //Transforma todo el string en un array.
console.log(hacerArray2); //Pone palabra por palabra en un array.





//Quitar los espacios por delante y por detras de un string:

const otroTexto6 = "     Este texto tiene 5 espacios delante y detrás     "

const quitarEspacios = otroTexto6.trim();

console.log(otroTexto6); //Texto con espacios.
console.log(quitarEspacios); //Texto sin espacios.



