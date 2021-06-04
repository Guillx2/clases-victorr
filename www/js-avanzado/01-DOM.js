'use strict';


// DOM - Document Object Model

/* 
El DOM es la estructura del documento HTML. Una página HTML está 
formada por múltiples etiquetas HTML, anidadas una dentro de otra, 
formando un árbol de etiquetas relacionadas entre sí, que se 
denomina árbol DOM (o simplemente DOM).
*/
/*
Con esto podemos acceder al HTML de nuestro documento y modificarlo
desde JavaScript.
Para hacer eso tenemos diferentes objetos para llamar a una clase
o a un id.
*/

    //COMO LLAMAR ELEMENTOS DEL HTML CON UN ID CONCRETO:

//Creamos un <div> en el index.html para hacer pruebas.

//Objeto "document":

    //Para acceder a un id de HTML:
document.getElementById("divprueba");
    //Lo podemos asignar a una variable:
        //  let caja = document.getElementById("divprueba");
    //También podemos acceder a una "class" de HTML:
        //  let caja = document.getElementByClassName("clase1")

//Para imprimir el contenido de la etiqueta usamos la propiedad 
//.innerHTML:
let caja = document.getElementById("divprueba").innerHTML;

console.log(caja);
/*
Con .innerHTML también podemos cambiar el contenido del elemento:
    caja.innerHTML = "¡TEXTO cambiado PARA hacer LA prueba.";
 */

    //Creamos otro div en el html.
    let caja2 = document.getElementById("divprueba2");
//También podemos cambiar los estilos CSS desde JavaScript:
    
    caja2.style.background = "red";
    caja2.style.padding = "20px";
    caja2.style.color = "yellow";


//Podemos crear una función y hacer que cambie el color, por ejemplo:
    function cambiaColor(color){
        caja2.style.background = color;
    };
    // Y cambiarlo las veces que queramos, llamando a la función:
    cambiaColor("blue");
    cambiaColor("green");
    cambiaColor("black");


//Podemos crear y añadir una clase con .className:
caja2.className = "crearClase";



//QUERY SELECTOR:
/* 
    //Creamos un nuevo div en el html.
Con .querySelector() podemos seleccionar elementos del html, como 
id y class igual que con .getElementBy...
 
*/
    //Para seleccionar un id:
let caja3 = document.querySelector("#divprueba3");
    //Para seleccionar una class:
        //let caja3 = document.querySelector(".clase2");
caja3.style.background = "blue";
caja3.style.padding = "50px";



    
