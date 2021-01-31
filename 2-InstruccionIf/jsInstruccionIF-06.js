function mostrar()
{
	//tomo edad
	let edad = parseInt(document.getElementById('txtIdEdad').value);
	//verifico si es mayorde edad, adolescente o niño
	if (edad>=18) {
		alert("Es adulto");
	} else if (edad<=12) {
			alert("Es niño");
		} else {
			alert("Es adolescente");
		};

}
