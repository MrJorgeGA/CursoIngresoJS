/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	let nombre = document.getElementById('txtIdNombre').value;//tomamos el nombre del primer textbox
	let edad = document.getElementById('txtIdEdad').value;//tomamos la edad del segundo textbox
	alert("Usted se llama "+nombre+" y tiene "+edad+" años");
}
