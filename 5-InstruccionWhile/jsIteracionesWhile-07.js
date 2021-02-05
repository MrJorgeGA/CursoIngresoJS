/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	//creo variables
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	let respuesta;
	// do while hasta que el usuario no responda "si"
	do {
		//le pido numeros en do while para asegurarme que se ingresa al menos un numero
		do {numeroIngresado=parseFloat(prompt('Ingrese un número'));}
			while (isNaN(numeroIngresado));
		//acumulo las respuestas y cuento cuantas vamos
		acumulador+=numeroIngresado;
		contador++;
		//pregunto si desea continuar
		respuesta=prompt('¿Desea continuar?').toLowerCase()
	} while (respuesta=='si');
	//escribo los resultadoes en los textboxes correspondientes
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}
