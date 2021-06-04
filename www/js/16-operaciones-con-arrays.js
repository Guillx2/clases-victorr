'use strict';

//OPERACIONES CON ARRAYS



    //AÑADIR CONTENIDO: 
//Para AÑADIR CONTENIDO a un array usamos el método .PUSH().
const series = ["Game of Thrones", "Big Bang Theory", "Chernobyl", "Vikings"];

console.log(series);

//Si queremos añadir la serie "Los Soprano", por ejemplo:
series.push("Los Soprano");
console.log(series);
//Vemos que "Los Soprano" ha sido añadida correctamente al array.
//Podemos añadir más separándolos con comas:
series.push("The Good Doctor", "Stranger Things", "Homeland");
console.log(series);




    //ELIMINAR CONTENIDO:
//Para ELIMINAR el ÚLTIMO elemento del array usamos el método .POP():
series.pop();
console.log(series); //Elimina "Homeland"
//Ahora vuelvo a eliminar el último:
series.pop();
console.log(series); //Elimina "Stranger Things"





//Para ELIMINAR un elemento del array utilizamos el método .SPLICE():
//Con esto borramos del elemento 0 (incluido) al 2 (no incluido)
//Esto borra "Game of Thrones" y "Big Bang Theory"
series.splice(0, 2);
// El 0 hace referencia al elemento desde donde queremos empezar a borrar.
// El 2 hace referencia de hasta que elemento queremos borrar (sin incluirlo).
console.log(series);



    //CONVERTIR:
//Para CONVERTIR un ARRAY en un STRING separado por comas usamos el método .JOIN():
const conversion = series.join();
console.log(conversion);


//EXTRA: CONVERTIR un STRING en un ARRAY con .SPLIT():
const conversion2 = "Rosana, Manolo, Jaime, Teresa, Susana";
const cadenaArray = conversion2.split(", ");
// (", ") indica: "separa todo cuando exista una coma+espacio"
console.log(cadenaArray);

//Si están separados por barra (/):
const conversion3 = "texto1/texto2/texto3";
const cadenaArray2 = conversion3.split("/");
console.log(cadenaArray2);



    //ORDENAR:
//Para ORDENAR un ARRAY ALFABÉTICAMENTE usamos el método .SORT():
const elArray = ["Sabela", "Rosa", "Miguel", "Carmen", "Luís"];
const ordenarElArray = elArray.sort();

console.log(ordenarElArray);



//Para DARLE LA VUELTA a un ARRAY usamos el método .REVERSE():
const otroArray = ["texto1", "texto2", "texto3", "texto4"];
console.log(otroArray.reverse());






    //BUSCAR:
//Para BUSCAR un elemento en un array usamos el método .FIND():

const otroArrayMas = ["numero", "letra", "coma", "punto", "color"];

const buscar = otroArrayMas.find(array => array === "letra");
console.log(buscar);

//Para BUSCAR el índice en el que se encuentra un elemento usamos .FINDINDEX():
const buscar2 = otroArrayMas.findIndex(array => array === "letra");
console.log(buscar2); // "letra" está en el índice [1]

console.log('----------------');
//Para BUSCAR en un array de números:
const numeros = [4, 10, 17, 33, 50, 63, 85, 98];

//Para buscar si hay algún número menor o mayor que x usamos el método .SOME():
//Buscamos si hay números menores que 30:
const menor = numeros.some(numero => numero < 30);
console.log(menor); //devuelve "true" porque hay números menores que 30.

//Para buscar si hay algún número mayor que x:
//Buscamos si hay números mayores que 100:
const numeros2 = [5, 16, 25, 60, 81, 93];
const mayor = numeros2.some(numero => numero > 100);
console.log(mayor); //devuelve "false" porque no hay números mayores que 100.