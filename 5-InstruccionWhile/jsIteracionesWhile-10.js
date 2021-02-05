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
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadPositivos=0;
	let cantidadNegativos=0;
	let cantidadCeros=0;
	let pares=0;
	//do while hasta que el usuario se canse
	do {
		numeroIngresado=parseFloat(prompt("Ingrese un número"));
		//cuento y sumo positivos y negativos y cuento ceros
		if (numeroIngresado>0) {
			cantidadPositivos++;
			sumaPositivos+=numeroIngresado;
		} else if (numeroIngresado<0) {
			cantidadNegativos++;
			sumaNegativos+=numeroIngresado;
		} else if(numeroIngresado==0) {
			cantidadCeros++;
		};
		//cuento pares
		if (numeroIngresado%2==0) {pares++;};
		respuesta=prompt("desea continuar?").toLowerCase();
	} while(respuesta=="si"||respuesta=="s")
	//si se han escrito numeros o no
	if (cantidadPositivos==0&&cantidadNegativos==0&&cantidadCeros==0) {
		document.write("No se han escrito números");
	} else {
		//si se han escrito negativos o no
		if (cantidadNegativos==0) {
			document.write("No se escribieron números negativos");
		} else {
			document.write("La suma de negativos es: "+sumaNegativos);
			document.write("\nLa cantidad de negativos es: "+cantidadNegativos);
			document.write("\nEl promedio de negativos es: "+sumaNegativos/cantidadNegativos);
		};
		//si se han escrito positvos o no
		if (cantidadPositivos==0){
			document.write("\nNo se escribieron números positvos");
		} else {
			document.write("\nLa suma de positvos es: "+sumaPositivos);
			document.write("\nLa cantidad de positvos es: "+cantidadPositivos);
			document.write("\nEl promedio de positvos es: "+sumaPositivos/cantidadPositivos);
		};
		//si se han escrito ceros o no
		if (cantidadCeros==0) {
			document.write("\nNo se escribieron ceros");
		} else {
			document.write("\nLa cantidad de ceros es: "+cantidadCeros);
		};
		//si se han escrito pares o no
		if (pares==0) {
			document.write("\nNo se escribieron números pares");
		} else {
			document.write("\nLa cantidad de pares es: "+pares);
		};
		//si se escribieron positivos y negativos realizo la diferencia
		if (cantidadPositivos!=0&&cantidadNegativos!=0) {
			document.write("\nLa diferencia entre positvos y negativos es: "+(sumaPositivos-sumaNegativos));
		};
	};
}
