/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let maximo;
	let minimo;
	let ingreso;
	let cuantos = parseInt(prompt('¿Cuántos números desea ingresar?'));
	while (cuantos>=1) {
		if (isNaN(ingreso)) {
			ingreso = parseFloat(prompt('Ingrese un número'));
			maximo = ingreso;
			minimo = ingreso;
			for (var i = 1; i <= (cuantos-1); i++) {
				ingreso = parseFloat(prompt('Ingrese un número'));
				if (ingreso>maximo) {
					maximo=ingreso;
				} else if(ingreso<minimo){
						minimo=ingreso;
					};
			};
		} else {
				for (var i = 1; i <= cuantos; i++) {
					ingreso = parseFloat(prompt('Ingrese un número'));
					if (ingreso>maximo) {
						maximo=ingreso;
					} else if(ingreso<minimo){
							minimo=ingreso;
						};
				};
			};
		cuantos = parseInt(prompt('Si desea continuar indique cuantos numeros más desea ingresar'));
	};
	if (isNaN(ingreso)) {
		document.getElementById('txtIdMaximo').value='baka';
		document.getElementById('txtIdMinimo').value='baka';
	} else {
			document.getElementById('txtIdMaximo').value=maximo;
			document.getElementById('txtIdMinimo').value=minimo;
		};
}
