/*
al presionar el botón
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	//creo variable
	let numeroIngresado;
	//do while hasta que el usuario ponga un numero del 0 al 9
	do {
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	} while (!(numeroIngresado >= 0 && numeroIngresado <= 9));
	//expreso en el textbox lo ingresado por el usuario
	document.getElementById('txtIdNumero').value = numeroIngresado
}
