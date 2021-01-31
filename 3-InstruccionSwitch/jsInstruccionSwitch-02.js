function mostrar()
{
	//Tomo el mes
	let mes = document.getElementById('txtIdMes').value;
	// Mensaje según mes
	switch (mes) {
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frío, ahora el calor!!!");
			break;
		default:
			alert("Falta para el invierno");
	};
}
