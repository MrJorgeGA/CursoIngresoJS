/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares()
{
  //inicio el contador
  let contador = 0;
  //tomo el número que ingreso el usuario
  let numero = parseInt(document.getElementById('txtIdNumero').value);
  //verifivo que este sea un numero natural
  if (numero>0) {
    //busco los numeros pares empezando desde el 2 y sumando de a 2 y contabilizo en el contador
    for (i=2;i<numero;i+=2) {
      console.log(i);
      contador++;
    };
    //infomro la cantidad que hay en el contador
    console.log('Hay '+contador+' números pares entre 0 y '+numero);
  }
  //el usuario no dio un numero natural
  else {alert('Entrada Invalida')};
}

function NumerosImpares()
{
  //inicio el contador
  let contador = 0;
  //tomo el número que ingreso el usuario
  let numero = parseInt(document.getElementById('txtIdNumero').value);
  //verifivo que este sea un numero natural
  if (numero>0) {
    //busco los numeros impares empezando desde el 1 y sumando de a 2 y contabilizo en el contador
    for (i=1;i<numero;i+=2) {
      console.log(i);
      contador++;
    };
    //infomro la cantidad que hay en el contador
console.log('Hay '+contador+' números impáres entre 0 y '+numero);
  }
  //el usuario no dio un numero natural
  else {alert('Entrada Invalida')};
}

function NumerosDivisibles()
{
  //inicio el contador
  let contador = 0;
  //tomo el número que ingreso el usuario
  let numero = parseInt(document.getElementById('txtIdNumero').value);
  //verifivo que este sea un numero natural
  if (numero>0) {
    //busco todos los divisores del menores a 100 con el bucle,los informo y contabilizo en elcontador
    for (i=1;i<101;i++) {
      if (numero%i==0) {
        console.log(i);
        contador++;
      };
    };
    //infomro la cantidad que hay en el contador
    console.log('Hay '+contador+' divisores de '+numero+' entre 1 y 100');
  }
  //el usuario no dio un numero natural
  else {alert('Entrada Invalida')};
}

function VerificarPrimo()
{
  //inicio el contador
 	let contador = 0;
  //tomo el número que ingreso el usuario
  let numero = parseInt(document.getElementById('txtIdNumero').value);
  //verifivo que este sea un numero natural
  if (numero>0) {
    //Numero primo: solo dos divisores naturales: 1 y si mismo. Busco cuantos divisores tiene el numero del usuario y los contabilizo con el contador
    for (i=1;i<=numero;i++) {
      if (numero%i==0) {
        console.log(i);
        contador++;
      };
    };
    //si el contador es 2, tiene 2 divisores, ergo es numero primo, si no, no
    if (contador==2) {console.log(numero+' es número primo')}
    else {console.log(numero+' NO es número primo')};
  }
  //el usuario no dio un numero natural
  else {alert('Entrada Invalida')};
}

function NumerosPrimos()
{
  //variables utilizadas
  let contador;
  let contadorPrimos = 0;
  //tomo el número que ingreso el usuario
  let numero = parseInt(document.getElementById('txtIdNumero').value);
  //verifivo que este sea un numero natural
  if (numero>0) {
    //ciclo for para ir buscando divisores
    for (i=1; i<=numero;i++) {
      // si "i" es divisor, inicializo "contador"
      if (numero%i==0) {
        contador = 0;
        //y aplico el bucle para saber si "i" es primo
        for (b=1;b<=i;b++) {
          if (i%b==0) {
            contador++;
          };
        };
        //si lo es, lo cuento en el "contadorPrimos" e informo el numero en cuestion
        if (contador==2) {
          contadorPrimos++
          console.log(i);
        };
      };
    };
    //dependiendo de la cantidad de divisores primos que tenga el numero del usuario, informo
    if (contadorPrimos==1) {console.log(numero+' tiene un solo divisor primo');}
    else {console.log(numero+' tiene '+contadorPrimos+' divisores primos')};
  }
  //el usuario no dio un numero natural
  else {alert('Entrada Invalida')};
}
