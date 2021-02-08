/*Además de lo anterior, ahora
se agregara un temporizador que
 a los cinco segundos dará por terminado
 el juego  de no ser ingresado el resultado
 correcto en ese lapso de tiempo. */
let respuesta;
let temporizador;
let tiempoInicio;
let tiempoFinal;
function comenzar()
{
	//Fórmula mágica para los numeros, luego los coloco en los textboxes
	let maximo = 10;
	let minimo = 1;
	let numero1 = Math.round(Math.random()*(maximo-minimo)+minimo);
	document.getElementById('txtIdPrimerNumero').value = numero1;
	let numero2 = Math.round(Math.random()*(maximo-minimo)+minimo);
	document.getElementById('txtIDSegundoNumero').value = numero2;
	//randomizo el operador, con maximo de 4 por los 4 operadores
	maximo = 4;
	let operador = Math.round(Math.random()*(maximo-minimo)+minimo);
	//segun que numero, corresponde un operador. se calcula y se pone en el textbox correspondiente el signo para calcular
	switch (operador) {
		case 1:
			respuesta = numero1 + numero2;
			document.getElementById('txtIdOperador').value = "+";
			break;
		case 2:
			respuesta = numero1 - numero2;
			document.getElementById('txtIdOperador').value = "-";
			break;
		case 3:
			respuesta = numero1 * numero2;
			document.getElementById('txtIdOperador').value = "x";
			break;
		case 4:
			respuesta = numero1 / numero2;
			document.getElementById('txtIdOperador').value = "/";
			break;
	};
	//redondeamos a 2 digitos despues de la coma
	respuesta = Math.round(respuesta*100)/100;
	//hago un temporizador de 5 segundos para que el usuario responda
	temporizador=setTimeout(Responder, 5000);
	//tomo el momento en que carga la pagina
	tiempoInicio=new Date();
	tiempoInicio=tiempoInicio.getTime();
}
function Responder()
{
	//tomo el momento en el que se inicia la función Responder
	tiempoFinal=new Date();
	tiempoFinal=tiempoFinal.getTime();
	//si la diferencia de tiempoes es igual o mayor a 5 segundos el usuario perdió autamaticamente, si no, se verifica su respuesta
	if (tiempoFinal-tiempoInicio>=5000) {
		alert('Se acabó el tiempo, ha perdido!')
	} else {
		//termino el temporizador, para que no salte el mensaje de los 5 segundos
		clearTimeout(temporizador);
		//switch sencillo, responde bien o no
		switch (parseFloat(document.getElementById('txtIdRespuesta').value)) {
			case respuesta:
			alert("Correeectooo!");
			break;
			default:
			alert("Incorrecto, el resultado es: "+respuesta)
		};
	};
}
