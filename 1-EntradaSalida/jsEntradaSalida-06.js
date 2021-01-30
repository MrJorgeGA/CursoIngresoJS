/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let primernumero =  parseInt(document.getElementById('txtIdNumeroUno').value);//convertimos en entero el input del usuario
	let segundonumero = parseInt(document.getElementById('txtIdNumeroDos').value);//convertimos en entero el input del usuario
	alert("La suma es "+(primernumero+segundonumero));
}
