'use strict';

//PARÁMETROS REST Y SPREAD

//El parámetro rest se utiliza para añadir valores no definidos a la función.
//Este es un código normal:
function listaFrutas(fruta1,fruta2){
    console.log(`Fruta 1: ${fruta1}`);
    console.log((`Fruta 2: ${fruta2}`));
}

listaFrutas("Manzana", "Naranja");

/* 
//Código utilizando el REST (...):
Por ejemplo si quiero que se añadan frutas que no están definidas y 
que voy a añadir posteriormente en el llamado a la función
 */
function listaFrutas2(fruta3,fruta4,...restoDeFrutas){
    console.log(`Fruta 3: ${fruta3}`);
    console.log(`Fruta 4: ${fruta4}`);
    //Con esto creamos un array con el resto de las frutas 
    console.log(restoDeFrutas);
}

listaFrutas2("Manzana","Pera","Uva","Melón","Sandía","Mandarina");