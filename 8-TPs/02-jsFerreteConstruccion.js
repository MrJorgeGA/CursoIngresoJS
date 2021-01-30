/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{
	//Tomo largo y ancho, calculo perímetro (2*largo+2*ancho) y multiplico por las 3 vueltas
	let largo = parseFloat(document.getElementById('txtIdLargo').value);
	let ancho = parseFloat(document.getElementById('txtIdAncho').value);
	alert("Se necesitan "+2*(largo+ancho)*3+"m de alambre");
}
function Circulo ()
{
	//Tomo el radio y calculo el perímetro del círculo (2*Pi*radio) y multiplico por las 3 vueltas
	let radio = parseFloat(document.getElementById('txtIdRadio').value);
	alert("Se necesitan "+(2*Math.PI*radio*3).toFixed(2)+"m de alambre");
}
function Materiales ()
{
	//Tomo largo y ancho, calculo el área, y luego aplico las 2 bolsas de cemento por m^2 y las 3 de cal por m^2
	let largo = parseFloat(document.getElementById('txtIdLargo').value);
	let ancho = parseFloat(document.getElementById('txtIdAncho').value);
	let area = largo*ancho;
	alert("Se necesitan "+ area*2 +" bolsas de cemento y "+ area*3 +" bolsas de cal")
}
