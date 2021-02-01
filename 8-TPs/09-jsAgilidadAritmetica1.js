/*Debemos mostrar dos números Random  del 1 al 10
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let respuesta;
function comenzar()
{
	//Fórmula mágica para los numeros, luego los coloco en los textboxes
	let maximo = 10;
	let minimo = 1;
	let numero1 = Math.round(Math.random()*(maximo-minimo)+minimo);
	document.getElementById('txtIdPrimerNumero').value = numero1;
	let numero2 = Math.round(Math.random()*(maximo-minimo)+minimo);
	document.getElementById('txtIdSegundoNumero').value = numero2;
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
			document.getElementById('txtIdOperador').value = "X";
			break;
		case 4:
			respuesta = numero1 / numero2;
			document.getElementById('txtIdOperador').value = "/";
			break;
	};
	//redondeamos a 2 digitos despues de la coma
	respuesta = Math.round(respuesta*100)/100;
}
function Responder()
{
	//switch sencillo, responde bien o no
	switch (parseFloat(document.getElementById('txtIdRespuesta').value)) {
		case respuesta:
			alert("Correeectooo!");
			break;
		default:
			alert("Incorrecto, el resultado es: "+respuesta)
	};
}
