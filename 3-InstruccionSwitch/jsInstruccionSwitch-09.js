function mostrar()
{
	//tomamos la estación y el destino
	let estacion = document.getElementById('txtIdEstacion').value;
	let destino = document.getElementById('txtIdDestino').value;
	//precio base y aumentos y descuentos que se aplicarán
	base = 15000;
	aumento1 = 110/100;
	aumento2 = 120/100;
	descuento1 = 90/100;
	descuento2 = 80/100;
	//Primero veo en que estación se viajará
	switch (estacion) {
		case "Invierno":
			//Luego en cada estación le aplicamos a los destinos su precio, segun tenga descuentos o aumentos
			switch (destino) {
				case "Bariloche":
					alert("El precio final es $"+base*aumento2);
					break;
				case "Mar del plata":
					alert("El precio final es $"+base*descuento2);
					break;
				default:
					alert("El precio final es $"+base*descuento1);
			};
			break;
		case "Verano":
				switch (destino) {
					case "Mar del plata":
						alert("El precio final es $"+base*aumento2);
						break;
					case "Bariloche":
						alert("El precio final es $"+base*descuento2);
						break;
					default:
						alert("El precio final es $"+base*aumento1);
				};
			break;
		default:
			switch (destino) {
				case "Cordoba":
					alert("El precio final es $"+base);
					break;
				default:
				alert("El precio final es $"+base*aumento1);
			};
	};
}
