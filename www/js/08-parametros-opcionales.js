'use strict';

/* 
Podemos pasarle parámetros opcionales a una función y no es obligatorio
llamarlos. 
*/

function calculadora1 (numA, numB, mostrar = false){
    console.log(`Suma: ${numA+numB}`);
    console.log(`Resta: ${numA-numB}`);
    console.log(`Multiplicación: ${numA*numB}`);
    console.log(`División: ${numA/numB}`);
}

calculadora1(10,5);

console.log('--------------------');



function calculadora2 (numAA, numBB, mostrar = false){
if(mostrar === false){
    console.log(`Suma: ${numAA+numBB}`);
    console.log(`Resta: ${numAA-numBB}`);
    console.log(`Multiplicación: ${numAA*numBB}`);
    console.log(`División: ${numAA/numBB}`);
} else {
    document.write(`<h1>+Resultados de ${numAA} y ${numBB}`)
    document.write(`<h2>Suma: ${numAA+numBB}<br/></h2>`);
    document.write(`<h2>Resta: ${numAA-numBB}<br/></h2>`);
    document.write(`<h2>Multiplicación: ${numAA*numBB}<br/></h2>`);
    document.write(`<h2>División: ${numAA/numBB}<br/></h2>`);
}
}
calculadora2(15,10); //Esto se ejecuta en consola (if)
calculadora2(8,4,true);//Esto se ejecuta en el documento (else)

console.log('*****************');
console.log('*****************');
/*
Lo anterior está bien, pero hace que la función contenga mucha información.
Otra forma de hacer el ejemplo anterior, es crear una función para ejecutar el
resultado por consola, y otra función para ejecutarlo en el documento.
*/

function porConsola(numeroA, numeroB){
    console.log(`Suma: ${numeroA+numeroB}`);
    console.log(`Resta: ${numeroA-numeroB}`);
    console.log(`Multiplicación: ${numeroA*numeroB}`);
    console.log(`División: ${numeroA/numeroB}`);
}

function porPantalla(numeroA, numeroB){
    document.write(`<h1>+Resultados de ${numeroA} y ${numeroB}`)
    document.write(`<h2>Suma: ${numeroA+numeroB}<br/></h2>`);
    document.write(`<h2>Resta: ${numeroA-numeroB}<br/></h2>`);
    document.write(`<h2>Multiplicación: ${numeroA*numeroB}<br/></h2>`);
    document.write(`<h2>División: ${numeroA/numeroB}<br/></h2>`);
}

function calculadora3(numeroA,numeroB,mostrar = false){
    if(mostrar===false){
        porConsola(numeroA,numeroB);
    } else {
        porPantalla(numeroA,numeroB);
    }
    return true;
}
calculadora3(50,10); // Por consola.
calculadora3(1000,500,true); //Por pantalla.