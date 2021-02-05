function mostrar()
{
	//pregunto cuantas veces repetiresmos el mensaje
	let repetciones = parseInt(prompt("ingrese el número de repeticiones"));
	//verificamos que loingresado sea valido
	if (!(repetciones>=1)) {
		alert('Ingreso incorrecto')
	} else {
		//realizamos el bucle todas las veces que pidio el usuario
		for (var i = 0; i < repetciones; i++) {
			alert('Hola UTN FRA');
		};
	};
}
