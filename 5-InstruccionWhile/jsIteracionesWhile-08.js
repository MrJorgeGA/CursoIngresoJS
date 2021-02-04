/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta='si';
	let sumaPositivos=0;
	let multiplicacionNegativos=1;
	let numeroIngresado;
	let bandera_p = 0
	let bandera_n = 0
	sumaPositivos=0;
	multiplicacionNegativos=1;
	while (respuesta=='si') {
		numeroIngresado=parseFloat(prompt('Ingrese un número'));
		if (numeroIngresado>0) {
			sumaPositivos+=numeroIngresado;
			if(bandera_p==0){bandera_p=1;};
		} else if (numeroIngresado<0) {
			multiplicacionNegativos*=numeroIngresado;
			if (bandera_n==0) {bandera_n=1;};
		};
		respuesta=prompt('¿Desea continuar?').toLowerCase()
	};
	if (bandera_p==1) {
		document.getElementById('txtIdSuma').value=sumaPositivos;
	} else {document.getElementById('txtIdSuma').value='No hubieron números positivos'};
	if (bandera_n==1) {
		document.getElementById('txtIdProducto').value=multiplicacionNegativos;
	} else {document.getElementById('txtIdProducto').value='No hubieron números negativos'};
}
