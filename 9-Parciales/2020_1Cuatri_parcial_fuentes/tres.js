function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let masTemperatura;
	let nombreTemperatura;
	let viudos = 0;
	let solos = 0;
	let fiebre = 0;
	let edadSolteros = 0;
	let solteros = 0;
	do {
		nombre = prompt('Ingrese el nombre');
		edad = parseInt(prompt('Ingrese la edad'));
		while (!(edad>=0)) {
			edad = parseInt(prompt('Ingrese una edad válida'));
		};
		do {
			sexo = prompt('Indique sexo (M o F)').toLowerCase();
		} while (sexo!='m'&&sexo!='f');
		do {
			estadoCivil = prompt('Indique estado civil:\n- Soltero/a\n- Casado/a\n- Viudo/a').toLowerCase();
		} while (estadoCivil!='soltero'&&estadoCivil!='casado'&&estadoCivil!='viudo'&&estadoCivil!='soltera'&&estadoCivil!='casada'&&estadoCivil!='viuda');
		temperatura = parseFloat(prompt('Indique la temperatura corporal'));
		while (!(temperatura>36&&temperatura<42)) {
			temperatura = parseFloat(prompt('Indique una temperatura corporal válida'));
		};
		if (isNaN(masTemperatura)) {
			nombreTemperatura = nombre;
			masTemperatura = temperatura;
		} else if (temperatura>masTemperatura) {
			nombreTemperatura = nombre;
			masTemperatura = temperatura;
		};
		if (edad>60&&estadoCivil=='viudo') {viudos++;};
		if (sexo=='m'&&estadoCivil!='casado') {solos++;};
		if (edad>60&&temperatura>38) {fiebre++;};
		if (sexo=='m'&&estadoCivil=='soltero') {
			edadSolteros+=edad;
			solteros++;
		};
		respuesta = prompt('¿Desea continuar?').toLowerCase()
	} while (respuesta=='si'||respuesta=='s');
	console.log('La persona con más temperatira corporal es '+nombreTemperatura);
	if (viudos!=0) {
		console.log('Hay '+viudos+' mayores de edad viudos');
	} else {
		console.log('No hay mayores de edad viudos');
	};
	if (solos!=0) {
		console.log('Hay '+solos+' hombres solteros o viudos');
	} else {
		console.log('No hay hombres solteros o viudos');
	};
	if (fiebre!=0) {
		console.log('Hay '+fiebre+' personas de la tercera edad con más de 38°C');
	} else {
		console.log('No hay personas de la tercera edad con fiebre');
	};
	if (solteros!=0) {
		console.log('El promedio de edad de los hombres solteros es '+edadSolteros/solteros);
	} else {
		console.log('No hay hombres solteros');
	};
}
