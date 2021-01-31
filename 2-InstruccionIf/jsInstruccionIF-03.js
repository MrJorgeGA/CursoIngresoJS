function mostrar()
{
	//tomo edad
	let edad = parseInt(document.getElementById('txtIdEdad').value);
	//verifico si es mayor de edad o si por el contrario menor
	if (edad>=18) {
		alert("Es mayor de edad");
	} else {
		alert("Es menor de edad");
	};
}
