/*Al comenzar el juego generaremos un número
RANDOM del 1 al 3 para la selección de la máquina,
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;

function comenzar()
{
	//Formula mágica para número aleatorio
	let maximo = 3;
	let minimo = 1;
	random = Math.round(Math.random()*(maximo-minimo)+minimo);
	//segun resultado asignamos la eleccion en el jue
	switch (random) {
		case 1: eleccionMaquina = "piedra"; break;
		case 2: eleccionMaquina = "papel"; break;
		case 3: eleccionMaquina = "tijera";break;
	};
}
function piedra()
{
	//Según elección determinamos al ganador siguiendo las reglas.
	switch (eleccionMaquina) {
		case "piedra": alert("EMPATE"); break;
		case "papel": alert("Usted PIERDE"); break;
		case "tijera": alert("Usted GANA");break;
	};
}
function papel()
{
	switch (eleccionMaquina) {
		case "piedra": alert("Usted GANA"); break;
		case "papel": alert("EMPATE"); break;
		case "tijera": alert("Usted PIERDE");break;
	};
}
function tijera()
{
	switch (eleccionMaquina) {
		case "piedra": alert("Usted PIERDE"); break;
		case "papel": alert("Usted GANA"); break;
		case "tijera": alert("EMPATE");break;
	};
}
