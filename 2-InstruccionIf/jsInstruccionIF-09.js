function mostrar()
{
	//seteo mximo y minimo
	let maximo = 10;
	let minimo = 1;
	//formula para generar numero aleatorio entre un techo y un piso
	let numero = Math.round(Math.random()*(maximo-minimo)+minimo);
	alert(numero);
}
