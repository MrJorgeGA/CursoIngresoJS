function mostrar()
{

	let repetciones = parseInt(prompt("ingrese el número de repeticiones"));
	if (!(repetciones>=1)) {
		alert('Ingreso incorrecto')
	} else {
		for (var i = 0; i < repetciones; i++) {
			alert('Hola UTN FRA');
		};
	};
}
