function mostrar()
{
	//tomo edad y estado estado civil
	let edad = parseInt(document.getElementById('txtIdEdad').value);
	let estado_civil = document.getElementById('estadoCivil').value;
	//verifico si es mayor y soltero
	if (edad>=18 && estado_civil=="Soltero") {
		alert("Es soltero y no es menor");
	};
}
