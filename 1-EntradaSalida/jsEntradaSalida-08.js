/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let primernumero = parseInt(txtIdNumeroDividendo.value);
	let segundonumero = parseInt(txtIdNumeroDivisor.value);
	if (segundonumero===0) {
		alert("¡No se puede dividir por cero!");
	}
	else {
		alert("El resto es "+(primernumero%segundonumero));
	};
}
