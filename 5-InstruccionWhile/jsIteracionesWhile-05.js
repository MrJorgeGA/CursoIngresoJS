/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	//creo variable
	let sexoIngresado;
	//do while hasta que el sexo sea correcto
	do {
		sexoIngresado = prompt("ingrese f ó m .");
	} while (sexoIngresado!='f'&&sexoIngresado!='m');
	//expreso en el textbox lo ingresado por el usuario
	document.getElementById('txtIdSexo').value=sexoIngresado;
}//FIN DE LA FUNCIÓN
