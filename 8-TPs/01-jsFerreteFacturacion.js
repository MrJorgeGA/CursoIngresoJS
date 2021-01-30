/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{
	//Tomo los 3 valores de los textboxes y los sumo en un alert
	let precio1 = parseFloat(document.getElementById('txtIdPrecioUno').value);
	let precio2 = parseFloat(document.getElementById('txtIdPrecioDos').value);
	let precio3 = parseFloat(document.getElementById('txtIdPrecioTres').value);
	alert("El precio de los tres productos es $"+(precio1+precio2+precio3));
}
function Promedio ()
{
	//Tomo los 3 valores de los textboxes, los sumo en un alert y luego divido por tres para promediarlos
	let precio1 = parseFloat(document.getElementById('txtIdPrecioUno').value);
	let precio2 = parseFloat(document.getElementById('txtIdPrecioDos').value);
	let precio3 = parseFloat(document.getElementById('txtIdPrecioTres').value);
	alert("El precio promedio de los tres productos es $"+(precio1+precio2+precio3)/3);
}
function PrecioFinal ()
{
	//Tomo los 3 valores de los textboxes, los sumo en un alert y luego los multiplico por 121/100 para aplicar IVA
	let precio1 = parseFloat(document.getElementById('txtIdPrecioUno').value);
	let precio2 = parseFloat(document.getElementById('txtIdPrecioDos').value);
	let precio3 = parseFloat(document.getElementById('txtIdPrecioTres').value);
	alert("El precio final con IVA de los tres productos es $"+(precio1+precio2+precio3)*121/100);
}
