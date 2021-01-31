function mostrar()
{
	//Tomo mes
	let mes = document.getElementById('txtIdMes').value;
	//Indico cantidad de días segun sea febrero o no
	switch (mes) {
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
		default:
			alert("Este mes tiene 30 o más días");
	};
}
