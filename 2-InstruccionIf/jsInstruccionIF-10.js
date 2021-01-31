function mostrar()
{
	// maximo, minimo y formula magico de numero aleatorio
	let maximo = 10;
	let minimo = 1;
	let numero = Math.round(Math.random()*(maximo-minimo)+minimo);
	//verifico el numero aleatorio y le asigno una calificación escolar segun escala
	if (numero>=9) {
		alert("EXCELENTE")
	}
	else if (numero>=4) {
		alert("APROBÓ")
	}
	else {
		alert("Vamos, la proxima se puede")
	};
}
