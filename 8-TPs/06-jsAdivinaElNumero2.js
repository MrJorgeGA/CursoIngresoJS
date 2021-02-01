/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos,
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
			//Switch condistintos mensajes segun cantidad de intentos
			switch (contadorIntentos) {
				case 1: alert("Usted es un Psíquico");break;
				case 2: alert("Excelente percepción");break;
				case 3: alert("Esto es suerte");break;
				case 4: alert("Excelente técnica");break;
				case 5: alert("Usted está en la media");break;
				default:
					if (contadorIntentos>=6&&contadorIntentos<=10) {alert("Falta técnica");}
					else {alert("Afortunado en el amor");};
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
