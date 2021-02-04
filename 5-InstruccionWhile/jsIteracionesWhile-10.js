/*
Al presionar el botón pedir  números
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables
	let respuesta = "si";
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadPositivos=0;
	let cantidadNegativos=0;
	let cantidadCeros=0;
	let pares=0;

	while(respuesta=="si"||respuesta=="s")
	{
		numeroIngresado=parseFloat(prompt("Ingrese un número"));
		if (numeroIngresado>0) {
			cantidadPositivos++;
			sumaPositivos+=numeroIngresado;
		} else if (numeroIngresado<0) {
			cantidadNegativos++;
			sumaNegativos+=numeroIngresado;
		} else if(numeroIngresado==0) {
			cantidadCeros++;
		};
		if (numeroIngresado%2==0) {pares++;};
		respuesta=prompt("desea continuar?").toLowerCase();
	};

	if (cantidadPositivos==0&&cantidadNegativos==0&&cantidadCeros==0) {
		document.write("No se han escrito números");
	} else {
		if (cantidadNegativos==0) {
			document.write("No se escribieron números negativos");
		} else {
			document.write("La suma de negativos es: "+sumaNegativos);
			document.write("\nLa cantidad de negativos es: "+cantidadNegativos);
			document.write("\nEl promedio de negativos es: "+sumaNegativos/cantidadNegativos);
		};
		if (cantidadPositivos==0){
			document.write("\nNo se escribieron números positvos");
		} else {
			document.write("\nLa suma de positvos es: "+sumaPositivos);
			document.write("\nLa cantidad de positvos es: "+cantidadPositivos);
			document.write("\nEl promedio de positvos es: "+sumaPositivos/cantidadPositivos);
		};
		if (cantidadCeros==0) {
			document.write("\nNo se escribieron ceros");
		} else {
			document.write("\nLa cantidad de ceros es: "+cantidadCeros);
		};
		if (pares==0) {
			document.write("\nNo se escribieron números pares");
		} else {
			document.write("\nLa cantidad de pares es: "+pares);
		};
		if (cantidadPositivos!=0&&cantidadNegativos!=0) {
			document.write("\nLa diferencia entre positvos y negativos es: "+(sumaPositivos-sumaNegativos));
		};
	}
}//FIN DE LA FUNCIÓN
