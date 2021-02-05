function mostrar()
{
	//creo variables
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	//pedir hasta tener 5 numeros
	while (contador<5) {
		//do while para verificar que el usuario ingresa un numero
		do {
			numeroIngresado=parseFloat(prompt('Ingrese un número'));
		} while (isNaN(numeroIngresado));
		//acumulo el numero y cuento cuantos numeros ingrese
		acumulador+=numeroIngresado;
		contador++;
	};
	//Imprimo en los textboxes correspondientes los resultados
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}
