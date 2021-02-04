function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	while (contador<=4) {
		do {
			numeroIngresado=parseFloat(prompt('Ingrese un número'));
		} while (isNaN(numeroIngresado));
		acumulador+=numeroIngresado;
		contador++;
	};
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/5;
}
