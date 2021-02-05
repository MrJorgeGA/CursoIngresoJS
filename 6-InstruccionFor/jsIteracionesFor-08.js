function mostrar()
{
	//inicio el alberto contador (?
	let contador=0;
	//le pido al usuario un numero natural
	let numero=parseInt(prompt('Ingrese un número natural'));
	//verifico que el usuario lo haya hecho realmente
	if (numero>=1) {
		//bucle for pora contar cuantos divisores tiene el numero
		for (i=1;i<numero+1;i++) {
			if (numero%i==0) {contador+=1};
		};
		//numero primo es aquel numero natural con dos divisores (el 1 y si mismo, el 1 no es primo a todo esto)
		if (contador==2) {
			alert(numero+' ES número primo!');
		} else {
			alert(numero+' NO ES número primo!');
		};
	} else {
		alert('Entrada inválida');
	};
}
