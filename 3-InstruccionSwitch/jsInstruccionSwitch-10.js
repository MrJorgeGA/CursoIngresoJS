function mostrar()
{
	//Tomamos estación y desino
	let estacion = document.getElementById('txtIdEstacion').value;
	let destino = document.getElementById('txtIdDestino').value;
	//Vemos que estación se seleccionó
	switch (estacion) {
		case "Invierno":
			//Según la estación defino si se viaja o no a los destinos
			switch (destino) {
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			};
			break;
		case "Verano":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			};
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
			};
			break;
		default:
			alert("Se viaja");
	};
}
