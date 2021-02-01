/*Al comenzar el juego generamos un número
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número
  ingresado es el mismo que el número secreto se dará
  por terminado el juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let contadorIntentos;

function comenzar()
{
	//Formula mágica para número aleatorio
	let maximo = 100;
	let minimo = 1;
	numeroSecreto = Math.round(Math.random()*(maximo-minimo)+minimo);
	//Iniciamos el contador y reiniciamos los textbox por si no es la primera vez que se juega
	contadorIntentos = 0;
	document.getElementById('txtIdNumero').value="";
	document.getElementById('txtIdIntentos').value="";
}

function verificar()
{
	//Sumamos el intento
	contadorIntentos++;
	// Tomamos la entrada del usuario
	let numero = parseInt(document.getElementById('txtIdNumero').value);
	//Verificación de entrada correcta
	if (numero>=1&&numero<=100) {
		//Verificamos si el número del usuario es mayor al secreto
		if (numero>numeroSecreto) {
			alert("se pasó...");
		}
		//Si no lo es, si es menor
		else if (numero<numeroSecreto) {
			alert("falta...");
		}
		//Entonces eligió bien
		else {
			//Pequeño switch por si le llega a pegarde una
			switch (contadorIntentos) {
				case 1: alert("Usted es un ganador!!! y en el primer intento!!!");break;
				default: alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
			};
		};
	}
	//Si no es una entrada correcta
	else {
		alert("Entrada invalida!");
	};
	//Sacamos por el textbox la cantidad de intentos
	document.getElementById('txtIdIntentos').value = contadorIntentos;
}
