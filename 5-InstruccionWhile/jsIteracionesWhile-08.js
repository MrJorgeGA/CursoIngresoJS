/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//inicializo variables y banderas
	let respuesta='si';
	let sumaPositivos=0;
	let multiplicacionNegativos=1;
	let numeroIngresado;
	let bandera_n = 0
	sumaPositivos=0;
	multiplicacionNegativos=1;
	// podria hacerse en do while, pero bueno, mientras se responda si se entraran numeros
	while (respuesta=='si') {
		numeroIngresado=parseFloat(prompt('Ingrese un número'));
		//estructura if para ver si hay un numero positivo o negativo
		if (numeroIngresado>0) {
			sumaPositivos+=numeroIngresado;
		} else if (numeroIngresado<0) {
			multiplicacionNegativos*=numeroIngresado;
			//bandera para confirmar existencia de negativos (1*-1*-1=1 )
			if (bandera_n==0) {bandera_n=1;};
		};
		//preguntamos si contunua el usuario
		respuesta=prompt('¿Desea continuar?').toLowerCase()
	};
	// mensaje en el texbox segun hayan habido o no positivos
	if (sumaPositivos!=0) {
		document.getElementById('txtIdSuma').value=sumaPositivos;
	} else {document.getElementById('txtIdSuma').value='No hubieron números positivos'};
	// mensaje en el textbox segun hayan habido o no negativos
	if (bandera_n==1) {
		document.getElementById('txtIdProducto').value=multiplicacionNegativos;
	} else {document.getElementById('txtIdProducto').value='No hubieron números negativos'};
}
