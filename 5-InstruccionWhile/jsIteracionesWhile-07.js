/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	let respuesta;
	do {
		do {numeroIngresado=parseFloat(prompt('Ingrese un número'));}
			while (isNaN(numeroIngresado));
		acumulador+=numeroIngresado;
		contador++;
		respuesta=prompt('¿Desea continuar?').toLowerCase()
	} while (respuesta=='si');
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}
