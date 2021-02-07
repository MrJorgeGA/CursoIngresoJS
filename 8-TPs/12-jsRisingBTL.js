/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos.
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso ()
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
  let sueldoBruto;
  let legajo;
  let nacionalidad;
  //dowhile hasta edad válida
  do {
    edadIngresada=parseInt(prompt("Ingrese una edad válida (18-90)"));
  } while (!(edadIngresada<=90&&edadIngresada>=18));
  //do while sexo valido (qué binario che...)
  do {
    sexoIngresado=prompt('Ingrese sexo ("M" o "F")').toUpperCase();
  } while (sexoIngresado!="M" && sexoIngresado!='F');
  //do while estado civil
  do {
    estadoCivilIngresado=parseInt(prompt('Ingrese estado civil:\n1. Soltero/a\n2. Casado/a\n3. Divorciado/a\n4. Viudo/a'));
  } while (!(estadoCivilIngresado>=1&&estadoCivilIngresado<=4));
  //do while sueldo no menor a 8000
  do {
    sueldoBruto=parseFloat(prompt('Ingrese sueldo bruto, no menor a $8000'));
  } while (!(sueldoBruto>=8000));
  //do while legajo entre 1000 y 9999
  do {
    legajo=parseInt(prompt('Ingrese legajo:\n- Debe tener 4 dígitos\n- No debe empezar con "0"'));
  } while (!(legajo>=1000&&legajo<=9999));
  //do while nacionalidad
  do {
    nacionalidad=prompt('Ingrese nacionalidad\n- Argentinos: "A"\n- Extranjeros: "E"\n- Nacionalizados: "N"').toLowerCase();
  } while (nacionalidad!="a"&&nacionalidad!="e"&&nacionalidad!="n");
  //pongo en el textbox la edad validada
  document.getElementById('txtIdEdad').value='Edad: '+edadIngresada+' años';
  //segun sexo se llenan en masculino o femeninos los textboxes de sexo estado civil y nacionalidad
  if (sexoIngresado=="M") {
    //si es masculino
    document.getElementById('txtIdSexo').value='Sexo: Masculino';
    //swith para los distintos estados civiles
    switch (estadoCivilIngresado) {
      case 1:
        document.getElementById('txtIdEstadoCivil').value='Estado Civil: Soltero';
        break;
      case 2:
        document.getElementById('txtIdEstadoCivil').value='Estado Civil: Casado';
        break;
      case 3:
        document.getElementById('txtIdEstadoCivil').value='Estado Civil: Divorciado';
        break;
      case 4:
        document.getElementById('txtIdEstadoCivil').value='Estado Civil: Viudo';
        break;
    };
    //switch para la nacionalidad
    switch (nacionalidad) {
      case "a":
        document.getElementById('txtIdNacionalidad').value='Nacionalidad: Argentino';
        break;
      case "e":
        document.getElementById('txtIdNacionalidad').value='Nacionalidad: Extranjero';
        break;
      case "n":
        document.getElementById('txtIdNacionalidad').value='Nacionalidad: Nacionalizado';
        break;
    };
  } else {
    //si es femenino
    document.getElementById('txtIdSexo').value='Sexo: Femenino';
    //estado civil
    switch (estadoCivilIngresado) {
      case 1:
        document.getElementById('txtIdEstadoCivil').value='Estado Civil: Soltera';
        break;
      case 2:
        document.getElementById('txtIdEstadoCivil').value='Estado Civil: Casada';
        break;
      case 3:
        document.getElementById('txtIdEstadoCivil').value='Estado Civil: Divorciada';
        break;
      case 4:
        document.getElementById('txtIdEstadoCivil').value='Estado Civil: Viuda';
        break;
    };
    //nacionalidad
    switch (nacionalidad) {
      case "a":
        document.getElementById('txtIdNacionalidad').value='Nacionalidad: Argentina';
        break;
      case "e":
        document.getElementById('txtIdNacionalidad').value='Nacionalidad: Extranjera';
        break;
      case "n":
        document.getElementById('txtIdNacionalidad').value='Nacionalidad: Nacionalizada';
        break;
    };
  };
  //lleno los textboxes de sueldo y de legajo
  document.getElementById('txtIdSueldo').value='Sueldo Bruto: $'+sueldoBruto;
  document.getElementById('txtIdLegajo').value="Legajo: "+legajo;
}
