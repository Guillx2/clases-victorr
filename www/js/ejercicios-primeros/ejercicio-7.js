'use strict';

/*
EJERCICIO 7
Tabla de multiplicar de un número introducido por pantalla.
*/

let number = parseInt(prompt("Introduce un número:"));

document.write(`<h1>La tabla de multiplicar del ${number}:</h1>`)
for(let i=0;i <=10; i++){
    document.write(`<h2>${number} x ${i} = ${i*number}</h2><br/>`);

}
 


/* 
//Todas las tablas de multiplicar:

for (let c=0; c<=14; c++){
    document.write(`<h1>La tabla de multiplicar del ${c}:</h1>`)
    for(let i=0;i <=10; i++){
        document.write(`<h2>${c} x ${i} = ${i*c}</h2><br/>`);
    
    }
}

 */