/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
	let primernumero = parseInt(document.getElementById('txtIdNumeroUno').value);
	let segundonumero = parseInt(document.getElementById('txtIdNumeroDos').value);
	alert("La suma es "+(primernumero+segundonumero));
}

function restar()
{
	let primernumero = parseInt(document.getElementById('txtIdNumeroUno').value);
	let segundonumero = parseInt(document.getElementById('txtIdNumeroDos').value);
	alert("La resta es "+(primernumero-segundonumero));
}

function multiplicar()
{
	let primernumero = parseInt(document.getElementById('txtIdNumeroUno').value);
	let segundonumero = parseInt(document.getElementById('txtIdNumeroDos').value);
		alert("La multiplicación es "+(primernumero*segundonumero));
}

function dividir()
{
	let primernumero = parseInt(document.getElementById('txtIdNumeroUno').value);
	let segundonumero = parseInt(document.getElementById('txtIdNumeroDos').value);
	if (segundonumero===0) {
		alert("¡No se puede dividir por cero!");
	}
	else {
		alert("La división es "+(primernumero/segundonumero));
	};
}
