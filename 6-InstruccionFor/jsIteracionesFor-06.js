function mostrar()
{
	numero = parseInt(prompt('Ingrese un número'));
if (numero>0) {
	for(i=2;i<numero;i+=2){
		console.log(i);
	};
} else {
	for(i=0;i>numero;i-=2){
		console.log(i);
	};
};
}//FIN DE LA FUNCIÓN
