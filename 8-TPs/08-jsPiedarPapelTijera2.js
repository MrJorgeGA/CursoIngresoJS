let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

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
	//Según elección determinamos al ganador siguiendo las reglas y sumamos al contador correspondiente.
	switch (eleccionMaquina) {
		case "piedra": alert("EMPATE"); ContadorDeEmpates++; break;
		case "papel": alert("Usted PIERDE"); ContadorDePerdidas++; break;
		case "tijera": alert("Usted GANA"); ContadorDeGanadas++; break;
	};
}
function papel()
{
	switch (eleccionMaquina) {
		case "piedra": alert("Usted GANA"); ContadorDeGanadas++; break;
		case "papel": alert("EMPATE"); ContadorDeEmpates++; break;
		case "tijera": alert("Usted PIERDE"); ContadorDePerdidas++; break;
	};
}
function tijera()
{
	switch (eleccionMaquina) {
		case "piedra": alert("Usted PIERDE"); ContadorDePerdidas++; break;
		case "papel": alert("Usted GANA"); ContadorDeGanadas++; break;
		case "tijera": alert("EMPATE"); ContadorDeEmpates++; break;
	};
}

function mostrarResultado()
{
	document.getElementById('txtIdGanadas').value = "Juegos ganados: " + ContadorDeGanadas;
	document.getElementById('txtIdPerdidas').value = "Juegos perdidos: " + ContadorDePerdidas;
	document.getElementById('txtIdEmpatadas').value = "Juegos empatados: " + ContadorDeEmpates;
}
