function mostrar()
{
	//Tomo el valor del mes
	let mes = document.getElementById('txtIdMes').value;
	//Según el valor entego un mensaje
	switch (mes) {
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!!")
			break;
	};
}
