'use strict';

//DOM 3 - Segunda Parte

//COMO LLAMAR ELEMENTOS POR SU CLASE:

//Creamos 3 divs con las clases azul, verde y verde en el index.html.
    //Para llamar a una class usamos .getElementsByClassName
let divsVerde = document.getElementsByClassName("verde");

console.log(divsVerde);
//Modificamos el contenido de los divs con class "verde":
    //No podemos modificarlos todos a la vez sin un bucle...
divsVerde[0].style.background = "limegreen";
divsVerde[0].style.padding = "30px";

divsVerde[1].style.background = "darkgreen";
divsVerde[1].style.padding = "50px";

//Modificarlos con un bucle (for...in):
for (let div in divsVerde){
    //Si los divs dentro de divsVerde tienen class "verde"...
    if(divsVerde[div].className === "verde"){
        //...ponles este style:
    divsVerde[div].style.color = "yellow";
    }
}

//Ahora modificamos el div con class "azul":
let divsAzul = document.getElementsByClassName("azul");
console.log(divsAzul);
divsAzul[0].style.background = "blue";
divsAzul[0].style.padding = "80px";
divsAzul[0].style.color = "white";
divsAzul[0].style.margin = "40px";