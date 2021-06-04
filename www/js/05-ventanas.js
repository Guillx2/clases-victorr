'use strict';

//ALERTA (pop-up):
//Esto se ejecuta hasta que el usuario de clic en aceptar.
//Tendrá que aceptar las 3 alertas para que siga ejecutándose el resto del código.
alert("Ejemplo de alerta. Pulsa aceptar.");
alert("Otro ejemplo de alerta. Pulsa aceptar otra vez.");
alert("Esta es la última alerta de este ejemplo. Vuelve a pulsar aceptar.");


//CONFIRMACIÓN
//Esto ejecuta un pop-up como el alert, pero con opción de aceptar o cancelar.
confirm("Ejemplo de CONFIRM.");
confirm("¿Confirmas que quieres continuar?");
confirm("Confirma una última vez...");
//Si queremos ver el resultado por consola de la respuesta, hacemos lo siguiente:
//Declaramos el confirm en una variable:
const confirmacion = confirm("Pulsa aceptar o cancelar para ver el resultado por consola.")
//Llamamos a esa variable:
console.log(confirmacion);
//Si el usuario ha pulsado "aceptar", devuelve "true".
//Si el usuario ha pulsado "cancelar", devuelve "false".


//INGRESO DE INFORMACIÓN
prompt("Ejemplo de prompt. Escribe lo que quieras:");
prompt("¿Qué edad tienes?", 18); 
//El "18" añade un valor prefinido al campo de escritura.
//Para mostrar el resultado por consola, hacemos lo siguiente:
//Declaramos el prompt en una variable:
const informacion = prompt("Dime tu nombre:");
//Llamamos a esa variable:
console.log(informacion);