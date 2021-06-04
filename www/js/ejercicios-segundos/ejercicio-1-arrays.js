'use strict';

/* 
EJERCICIO ARRAYS 

Hacer un programa que:
    X1. Pida 6 números por pantalla y los meta en un array.
    X2. Mostrar el array entero (todos sus elementos) en el cuerpo de 
        la página y en la consola.
    X3. Ordenar el array y mostrarlo por consola.
    X4. Invertir el orden del array y mostrarlo por consola.
    X5. Mostrar cuantos elementos tiene el array.
    -6. Hacer una busqueda de un valor introducido por el usuario.  
        Mostrarlo si lo encuentra y cual es su índice.
    (Se valorará el uso de funciones).
*/
//Vamos a tener que mostrar los números varias veces, asique podemos
//crear una función para eso:
function mostrarArray(elementos, textoPersonalizado = "") {
    document.write(`<h2>Contenido del Array ${textoPersonalizado}:</h2>`);
    document.write("<ul>");
    elementos.forEach((elemento, indice) => {
        document.write(`<li> ${elemento}</li>`)
    });
    document.write("</ul>");
}


let miArrayNumeros = [];

// 1. Pedir números:
//Vamos a pedir 6 números:
for (let i = 0; i <= 5; i++) {
    miArrayNumeros.push(parseInt(prompt("Introduce un número:")));

}

// 2. Mostrarlos por consola:
console.log(miArrayNumeros);

//Mostrarlo en el cuerpo de la página usando la función creada al
//principio, con el array y el textoPersonalizado.
mostrarArray(miArrayNumeros, "en el cuerpo de la página");



console.log('------------------');

// 3. Ordenarlos:
//Con esta función ordenamos los números de menor a mayor.
//Solo con sort los ordenaría alfabéticamente. Sort es para letras.
miArrayNumeros.sort(function(a,b){return a-b});
console.log(miArrayNumeros);
mostrarArray(miArrayNumeros, "ordenado");



console.log('-------------');
// 4. Darles la vuelta: (con respecto al último ejemplo)

miArrayNumeros.reverse();
mostrarArray(miArrayNumeros, "dado la vuelta");
console.log(miArrayNumeros.reverse);

console.log('------------');
// 5. Mostrar cuantos elementos tiene:

console.log(miArrayNumeros.length);
document.write(`<h3>El array tiene ${miArrayNumeros.length} elementos.`)

// 6. Búsqueda:

let busqueda = parseInt(prompt("Busca un número:"));
let posicion = miArrayNumeros.findIndex(numero => numero === busqueda);

if(posicion && posicion != -1){
    document.write("<h3>ENCONTRADO:</h3>");
    document.write(`<h3>Posición de la búsqueda: ${posicion}</h3>`);
} else{
    document.write("<h3>NO ENCONTRADO:</h3>");
    document.write(`<h3>El número ${busqueda} no está en la lista.</h3>`);
}
