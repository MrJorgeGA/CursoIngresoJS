/*En la pantalla se mostrarán 6 botones de
distintos colores,  al comenzar el juego se
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar
 el botón correcto se informara cuanto tiempo tardo.
*/
let ColorSecreto;
let tiempoInicio;
function comenzar()
{
	let maximo = 6;
	let minimo = 1;
	ColorSecreto = Math.round(Math.random()*(maximo-minimo)+minimo);
	switch (ColorSecreto) {
		case 1:
			ColorSecreto = 'azul'
			break;
		case 2:
			ColorSecreto = 'amarillo'
			break;
		case 3:
			ColorSecreto = 'marron'
			break;
		case 4:
			ColorSecreto = 'verde'
			break;
		case 5:
			ColorSecreto = 'celeste'
			break;
		case 6:
			ColorSecreto = 'rojo'
			break;
	};
	document.getElementById('txtIdColorElegido').value=ColorSecreto
	tiempoInicio=new Date();
	tiempoInicio=tiempoInicio.getTime();
}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	let tiempoFinal=new Date();
	tiempoFinal=tiempoFinal.getTime();
	switch (colorParametro) {
		case ColorSecreto:
			alert('Tardó '+(tiempoFinal-tiempoInicio)/1000+' segundos en responder correctamente');
			break;
		default:
			alert('Incorrecto, intente de nuevo');
	};
}
