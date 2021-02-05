function mostrar()
{
	contador=0;
	numero=parseInt(prompt('Ingrese un número'));
	if (numero>0) {
		for (i=-numero;i<0;i++) {
			if (numero%i==0) {contador+=1; console.log(i);};
		};
		for (i=1;i<numero+1;i++) {
			if (numero%i==0) {contador+=1; console.log(i);};
		};
		console.log('Se encontraron '+contador+' divisores enteros de '+numero);
	} else if(numero<0){
		for (i=numero;i<0;i++) {
			if (numero%i==0) {contador+=1; console.log(i);};
		};
		for (i=1;i<-numero+1;i++) {
			if (numero%i==0) {contador+=1; console.log(i);};
		};
		console.log('Se encontraron '+contador+' divisores enteros de '+numero);
	} else if(numero==0){
		console.log('El cero es divisible por todos los números! (menos por si mismo, dah)');
	} else {
		alert('No ingresó un entrada válida')
	}

}//FIN DE LA FUNCIÓN
