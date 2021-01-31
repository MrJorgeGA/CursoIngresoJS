function mostrar()
{
	//Tomo el destino turístico
	let destino = document.getElementById('txtIdDestino').value;
	//Informo su posición cardinal respecto del territorio continental
	switch (destino) {
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Bariloche":
			alert("Oeste");
			break;
		default:
			alert("Sur");
	}
}
