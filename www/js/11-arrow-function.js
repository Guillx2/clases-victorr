'use strict';

/*
ARROW FUNCTION / FUNCIONES FLECHA
Las funciones flecha son  iguales que las funciones anónimas pero con
una sintaxis un poco diferente (más corta y cómoda). 
Simplemente se cambia la palabra "function" por un "=>".
*/



//Usando el ejemplo del documento anterior:
/* 
function sumame(numero1,numero2,sumaYmuestra,sumaDosVeces){
    let sumar2 = numero1 + numero2;

    sumaYmuestra(sumar2);
    sumaDosVeces(sumar2);

    return sumar2;
}

sumame(5,7, function(dato){
    console.log(`La suma es: ${dato}`);
},
function(dato){
    console.log(`La multiplicación es: ${dato*2}`);
});

 */

 // Lo mismo pero con Arrow Function:
 function sumame(numero1,numero2,sumaYmuestra,sumaDosVeces){
    let sumar2 = numero1 + numero2;

    sumaYmuestra(sumar2);
    sumaDosVeces(sumar2);

    return sumar2;
}
//Simplemente cambiamos "function" al principio por "=>" al final:
//Si solo recibe un parámetro ("dato"), como en este caso, se podría 
//poner sin parénteris. Si recibe más de 1 hacen falta paréntesis.

//(dato) no necesita paréntesis:
sumame(5,7, (dato) => {
    console.log(`La suma es: ${dato}`);
},
//aquí está sin paréntesis:
dato => {
    console.log(`La multiplicación es: ${dato*2}`);
});

//El resultado es exactamente el mismo.