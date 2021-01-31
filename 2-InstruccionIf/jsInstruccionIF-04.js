function mostrar()
{
	//tomo edad
	let edad = parseInt(document.getElementById('txtIdEdad').value);
	//verifico si es adolescente
	if (edad<=17 && edad>=13) {
		alert("Es adolescente");
	};
}
