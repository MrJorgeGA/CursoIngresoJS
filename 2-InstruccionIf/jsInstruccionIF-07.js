function mostrar()
{
	//tomo la edad y luego el estado civil
	let edad = parseInt(document.getElementById('txtIdEdad').value);
	let estado_civil = document.getElementById('estadoCivil').value;
	//verifico si es menor y no es soltero
	if (edad<18 && estado_civil!="Soltero") {
		alert("Es muy pequeño para NO ser soltero");
	};
}
