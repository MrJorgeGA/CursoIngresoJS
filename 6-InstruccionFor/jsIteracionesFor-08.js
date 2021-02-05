function mostrar()
{
	contador=0;
	numero=parseInt(prompt('Ingrese un número natural'));
	if (numero>=1) {
		for (i=1;i<numero+1;i++) {
			if (numero%i==0) {contador+=1};
		};
		if (contador==2) {
			alert(numero+' ES número primo!');
		} else {
			alert(numero+' NO ES número primo!');
		};
	} else {
		alert('Entrada inválida');
	};
}
