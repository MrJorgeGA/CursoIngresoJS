
function mostrar()
{
	let objeto;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let cantidadAlcohol=0;
	let cantidadBarbijo=0;
	let cantidadJabon=0;
	let contadorAlcohol=0;
	let contadorBarbijo=0;
	let contadorJabon=0;
	let alcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	for (i = 1; i < 6; i++) {
		do {
			objeto = prompt(i+'. Escriba el tipo de objeto (barbijo, jabón o alcohol)').toLowerCase();
			if (objeto=='jabón') {objeto='jabon'};
			console.log(objeto);
		} while (objeto!='barbijo'&&objeto!='jabon'&&objeto!='alcohol');
		do {
			precio = parseFloat(prompt(i+'. Escriba el precio unitario del producto (solo entre $100 y $300)'));
		} while (!(precio>=100&&precio<=300));
		do {
			unidades = parseInt(prompt(i+'. Escriba la cantidad de unidades (solo entre 1 y 1000)'));
		} while (!(unidades>=1&&unidades<=1000));
		marca = prompt(i+'. Indique la marca del producto');
		fabricante = prompt(i+'. Escriba el fabricante del producto');
		switch (objeto) {
			case 'alcohol':
				if (cantidadAlcohol==0) {
					alcoholBarato=precio;
					cantidadAlcoholBarato=unidades;
					fabricanteAlcoholBarato=fabricante;
				} else if (precio<alcoholBarato) {
					alcoholBarato=precio;
					cantidadAlcoholBarato=unidades;
					fabricanteAlcoholBarato=fabricante;
				};
				cantidadAlcohol+=unidades;
				contadorAlcohol++;
				break;
			case 'barbijo':
				cantidadBarbijo+=unidades;
				contadorBarbijo++;
				break;
			case 'jabon':
				cantidadJabon+=unidades;
				contadorJabon++;
				break;
		};
	};
	if (contadorAlcohol==0) {
		alert('No se compró alcohol');
	} else {
		alert('El alcohol más barato lo fabrica '+fabricanteAlcoholBarato+' y se compraron '+cantidadAlcoholBarato+' unidades');
	};
	let aux=Math.max(cantidadAlcohol,cantidadBarbijo,cantidadJabon);
	switch (aux) {
		case cantidadAlcohol:
			alert('Se compraron '+cantidadAlcohol/contadorAlcohol+' unidades de alcohol por compra');
			break;
		case cantidadBarbijo:
		alert('Se compraron '+cantidadBarbijo/contadorBarbijo+' unidades de barbijo por compra');
			break;
		case cantidadJabon:
		alert('Se compraron '+cantidadJabon/contadorJabon+' unidades de jabón por compra');
			break;
	};
	alert('Hay '+cantidadJabon+' unidades de jabón');
}
