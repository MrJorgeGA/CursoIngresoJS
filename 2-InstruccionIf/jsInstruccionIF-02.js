function mostrar()
{
	//tomo edad
	let edad = parseInt(document.getElementById('txtIdEdad').value);
	//verifico que sea mayor de edad
	if (edad>=18) {
		alert("Es mayor de edad");
	};
}
