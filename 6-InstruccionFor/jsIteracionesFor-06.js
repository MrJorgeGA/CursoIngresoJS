function mostrar()
{
	//pedimos un numero
	let numero = parseInt(prompt('Ingrese un número'));
	//segun el numero sea superior o inferior a 1 imprimimos los pares con los bucles for correspondientes
	if (numero>0) {
		for(i=2;i<numero;i+=2){
			console.log(i);
		};
	} else {
			for(i=0;i>numero;i-=2){
				console.log(i);
			};
	};
}
