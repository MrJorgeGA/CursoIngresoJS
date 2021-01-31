function mostrar()
{
	//Tomo el destino
	let destino = document.getElementById('txtIdDestino').value;
	//Informo si el destino se visita hace  calor o frío, no tomamos la costa como viable en invierno ni Bariloche en vernao
	switch (destino) {
		case "Cataratas":
		case "Mar del plata":
			alert("CALOR");
			break;
		default:
			alert("FRÍO");
	}
}
