'use strict';

/* 
RECORRER UN ARRAY CON UN BUCLE
*/

//Podemos recorrer un array con un bucle for:
const arrayNombres = ["Susana", "Ramón", "Juan Antonio", "Lucía", "Simón"];

document.write("<h2>Lista de nombres:</h2>");

//Creamos una lista desordenada
document.write("<ul>");
//Indicamos que mientras i sea menor que la longitud del array (5)...
for (let i = 0; i < arrayNombres.length; i++) {
    //...escriba los nombres de todos los elementos uno por uno:
    document.write(`<li>${arrayNombres[i]}</li>`);
}
//Cerramos la lista:
document.write("</ul>")



//Podemos recorrer un array con el método FOR EACH:
/*
//Estructura:
    const nombre = ["1","2","3","4","5"];
    nombre.forEach((parámetros)=>{
        console.log(parámetros);
    });
*/
const lenguajes = ["PHP", "Java", "JS", "C", "C#", "Pyton"];

document.write("<h2>Lenguajes de programación:</h2>");
document.write("<ul>");

lenguajes.forEach((elemento, indice) => {
    document.write(`<li> ${indice,elemento}</li>`)
});
document.write("</ul>");