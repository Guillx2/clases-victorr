'use strict';

//ARRAYS MULTIDIMENSIONALES
/*
Los arrays multidimensionales son, básicamente, arrays dentro de arrays.
*/

const peliculas = ["Roma", "Kill Bill", "Transformers", "La Vida es Bella", "Requiem for a Dream"];
const generos = ["Acción", "Romance", "Comedia", "Western", "Terror", "Bélico"];

//Ahora vamos a crear un array nuevo y a meterle dentro los dos arrays anteriores:
const cine = [peliculas, generos];

console.log(cine);
/*
Por consola nos aparecerá un array que dentro tiene los dos arrays que habíamos
creado anteriormente. Esto es un array multidimensional.
*/



//COMO MOVERSE POR UN ARRAY MULTIDIMENSIONAL:
/* 
Debemos hacerlo por orden. Primero llamamos al array "cine", que contiene a su
vez los arrays "peliculas" y "generos". Después llamamos a la posición de
uno de esos arrays y finalmente llamamos a la posición del elemento que queramos.
*/

//Si queremos acceder a "Kill Bill", por ejemplo:
console.log(cine[0][1]);
//Accedemos primero a la posición 0 del array "cine" y después a la 1 de "peliculas"
// [0] = peliculas     [1] = "Kill Bill"


//Si queremos acceder a "Western":
console.log(cine[1][3]);
// [0] = generos       [3] = "Western"