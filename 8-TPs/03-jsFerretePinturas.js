/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados ()
{
	//Tomamos el valor puesto por el usuario y aplicamos la conversión a partir de "°C = (°F-32)*5/9"
	let temperatura = parseFloat(document.getElementById('txtIdTemperatura').value)
	alert(temperatura+"°F son "+(temperatura-32)*5/9+"°C")
}

function CentigradosFahrenheit ()
{
	//Tomamos el valor puesto por el usuario y aplicamos la conversión a partir de "°F = °C*9/5+32"
	let temperatura = parseFloat(document.getElementById('txtIdTemperatura').value)
	alert(temperatura+"°C son "+(temperatura*9/5+32)+"°F")
}
