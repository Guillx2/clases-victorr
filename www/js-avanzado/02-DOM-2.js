'use strict';

//DOM 2: Segunda parte.

//COMO LLAMAR ELEMENTOS POR SU ETIQUETA (<div><h1><p>...):

//Si por ejemplo queremos llamar a todos los <p> usamos .getElementsByTag:
//(Para llamar a 1 solo sería: getElementByTagName, no ElementSSS.)
    //Creamos una variable:
let todosLosParrafos = document.getElementsByTagName('p');
console.log(todosLosParrafos);


//Para acceder al segundo párrafo (que es el 1 porque empieza en 0):
    //Creamos una variable:
let acceder = todosLosParrafos[1];
console.log(acceder);


//Para mostrar solo el texto (sin las etiquetas) usamos .textContent:
    //(también se puede usar innerHTML).
let acceder2 = todosLosParrafos[1].textContent;
console.log(acceder2);


//El innerHTML tambiés se puede usar para modificar el contenido:
    //Modificamos el contenido del primer <p> [0].
let modificarTexto = todosLosParrafos[0];
modificarTexto.innerHTML = "Cambio de texto del primer párrafo.";
    //Vemos que ya se ha modificado en el cuerpo de la página.
    //Ahora lo mostramos por consola:
console.log(modificarTexto);
    //Le damos un estilo para que se vea mejor:
    modificarTexto.style.background = "red";
    modificarTexto.style.padding = "30px";





