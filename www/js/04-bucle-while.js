'use strict';

//BUCLE WHILE (mientras):


let year = 2018;

//"mientras" se cumpla la condición entre paréntesis...
while (year <= 2030) {  //(year siempre va a ser menor o igual a 2050. Bucle infinito)
    //...ejecuta esto:
    console.log(`Estamos en el año ${year}.`);

    year++; //(con esto cortamos el bucle infinito sumando 1 hasta llegar a 2051)
}


console.log('-----');
//Otro ejemplo:
//"mientras" que year sea diferente a 1991...
while (year !== 1995) {
    //...ejecuta esto:
    console.log(`Estamos en el año ${year}.`);

    year--; //Cuando llega a 1992, el bucle para.
} 



// DO...WHILE
//Haz (esto) mientras se cumpla (esto)

/* let numero = 10;

do {
    alert("SOLO CUANDO SEA DIFERENTE A 20")
} while (years !== 20);
//Esto muestra una ventana emergente mientras el número no sea 20. */
