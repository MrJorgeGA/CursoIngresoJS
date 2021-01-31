function mostrar()
{
	//tomo mes
	let mes = document.getElementById('txtIdMes').value;
	//Según mes, informo la cantidad de días que tiene en años no bisiestos
	switch (mes) {
		case "Febrero":
			alert("Este mes tiene 28 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
			break;
		default:
			alert("Este mes tiene 31 días");
	};
}
