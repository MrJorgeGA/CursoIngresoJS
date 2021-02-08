function mostrar()
{
  let respuesta;
  let tipo;
  let cantidad;
  let precio;
  let arena = 0;
  let cal = 0;
  let cemento = 0;
  let precioMaxArena;
  let precioMaxCal;
  let precioMaxCemento;
  let total = 0;
  do {
    do {
      tipo = prompt('Ingrese el tipo de producto que desea comprar:\n- Arena\n- Cal\n- Cemento');
      tipo = tipo.toLowerCase();
    } while (tipo!='arena'&&tipo!='cal'&&tipo!='cemento');
    cantidad = parseInt(prompt('Ingrese la cantidad de bolsas que desea comprar'));
    while (!(cantidad>0)) {
      cantidad = parseInt(prompt('Ingrese un cantidad válida'));
    };
    precio = parseFloat(prompt('Ingrese el precio por bolsa'));
    while (!(precio>0)) {
      precio = parseFloat(prompt('Ingrese un precio válido'));
    };
    switch (tipo) {
      case 'arena':
        arena+=cantidad;
        if (isNaN(precioMaxArena)) {
          precioMaxArena=precio;
        } else if (precio>precioMaxArena) {
          precioMaxArena=precio;
        };
        break;
      case 'cal':
        cal+=cantidad;
        if (isNaN(precioMaxCal)) {
          precioMaxCal=precio;
        } else if (precio>precioMaxCal) {
          precioMaxCal=precio;
        };
        break;
      case 'cemento':
        cemento+=cantidad;
        if (isNaN(precioMaxCemento)) {
          precioMaxCemento=precio;
        } else if (precio>precioMaxCemento) {
          precioMaxCemento=precio;
        };
        break;
      };
      total+=precio*cantidad;
      respuesta = prompt('¿Desea continuar?').toLowerCase();
  } while (respuesta=='si'||respuesta=='s');
  console.log('Importe total: $' +total);
  if (arena+cal+cemento>30) {
    console.log('Importe a pagar: $'+ total*75/100);
  } else if (arena10al+cemento>10) {
    console.log('Importe a pagar: $'+ total*85/100);
  } else {
    console.log('Importe a pagar: $'+total);
  };
  switch (Math.max(arena,cal,cemento)) {
    case arena:
      console.log('Se han comprado más bolsas de arena');
      break;
    case cal:
      console.log('Se han comprado más bolsas de cal');
      break;
    case cemento:
      console.log('Se han comprado más bolsas de cemento');
      break;
    };
    switch (Math.max(precioMaxArena,precioMaxCal,precioMaxCemento)) {
      case precioMaxArena:
        console.log('La bolsa más cara fue la de arena');
        break;
      case precioMaxCal:
        console.log('La bolsa más cara fue la de cal');
        break;
      case precioMaxCemento:
        console.log('La bolsa más cara fue la de cemento');
        break;
    };
}
