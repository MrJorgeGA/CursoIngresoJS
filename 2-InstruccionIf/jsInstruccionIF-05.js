function mostrar()
{
	//tomo edad
	let edad = parseInt(document.getElementById('txtIdEdad').value);
	//verifico si no es adolescente
	if (edad>=17 || edad<=13) {
		alert("No es adolescente");
	};
}
