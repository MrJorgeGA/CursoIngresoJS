/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	//inicio variables
	let maximo;
	let minimo;
	let ingreso;
	//pregunto cuantos numero desea ingresar el usuario
	let cuantos = parseInt(prompt('¿Cuántos números desea ingresar?'));
	//mientras el usuario indique una cantidad se cumple el bucle
	while (cuantos>=1) {
		//si es la primera vez en el buble
		if (isNaN(ingreso)) {
			// el primer ingreso de todos sera maximo y minimo a la vez
			ingreso = parseFloat(prompt('Ingrese un número'));
			maximo = ingreso;
			minimo = ingreso;
			//use un for para hacer magia (? con cuantos-1 porque ya se ingreso un numero
			for (var i = 1; i <= (cuantos-1); i++) {
				//verificamos si los ingresos corresponden o no a un maximo o un minimo
				ingreso = parseFloat(prompt('Ingrese un número'));
				if (ingreso>maximo) {
					maximo=ingreso;
				} else if(ingreso<minimo){
						minimo=ingreso;
					};
			};
		} else {
				//si no es la primera vez, el bucle for anterior pero ahora con el rango completo que dice el usuario
				for (var i = 1; i <= cuantos; i++) {
					ingreso = parseFloat(prompt('Ingrese un número'));
					if (ingreso>maximo) {
						maximo=ingreso;
					} else if(ingreso<minimo){
							minimo=ingreso;
						};
				};
			};
		//para continuar en el while el usuario debe poner un numero
		cuantos = parseInt(prompt('Si desea continuar indique cuantos numeros más desea ingresar'));
	};
	//verificamos si hubo una respuesta valida o no y damos las respuestas correspondientes
	if (isNaN(maximo)) {
		document.getElementById('txtIdMaximo').value='baka';//tonto en otaku (?
		document.getElementById('txtIdMinimo').value='baka';
	} else {
			document.getElementById('txtIdMaximo').value=maximo;
			document.getElementById('txtIdMinimo').value=minimo;
		};
}
