function mostrar()
{
	//iniciamos el contador
	let contador=0;
	//pedimos un numero
	let numero=parseInt(prompt('Ingrese un número'));
	//segun sea un entero positivo o negativo, los bucles son ligeramentes distintos pero de igual concepto
	if (numero>0) {
		//bucle for dividido en dos porque no se puede dividir por cero, primero divisores negativos
		for (i=-numero;i<0;i++) {
			//verifico si "i" es divisor (el resto es 0), lo informo si es y lo cuento
			if (numero%i==0) {contador+=1; console.log(i);};
		};
		//bucle divisores positivos
		for (i=1;i<numero+1;i++) {
			if (numero%i==0) {contador+=1; console.log(i);};
		};
		//aviso la contidad de divisores encontrados
		console.log('Se encontraron '+contador+' divisores enteros de '+numero);
	}
	//para numeros negativos
	else if(numero<0){
		//bucle divisores negativos
		for (i=numero;i<0;i++) {
			if (numero%i==0) {contador+=1; console.log(i);};
		};
		//bucle divisores positivos
		for (i=1;i<-numero+1;i++) {
			if (numero%i==0) {contador+=1; console.log(i);};
		};
		//aviso la contidad de divisores encontrados
		console.log('Se encontraron '+contador+' divisores enteros de '+numero);
	}
	//el 0 es un caso particular
	else if(numero==0){
		console.log('El cero es divisible por todos los números! (menos por si mismo, dah)');
	}
	// por si hay entrada invalida
	else {
		alert('No ingresó un entrada válida')
	};
}
