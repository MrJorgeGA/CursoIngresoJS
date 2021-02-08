var miIntervalo ;


function inicio()
{
	//muestromensaje de inicio
	alert("function inicio.");
	//inicio funcion SegundosEnElAire cada 3000 ms
	miIntervalo = setInterval(SegundosEnElAire, 3000);

}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

    alert("Bienvenido a la UTN FRA");

}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	//muestro mensaje de finalizacion
	alert("function fin.");
	//termino la funcion miIntervalo
	clearTimeout(miIntervalo);

}//FIN DE LA FUNCIÓN fin
