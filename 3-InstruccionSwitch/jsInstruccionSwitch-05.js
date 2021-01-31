function mostrar()
{
	//Tomo la hora
	let hora = parseInt(document.getElementById('txtIdHora').value);
	//Informo si es de mañana
	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
	};
}
