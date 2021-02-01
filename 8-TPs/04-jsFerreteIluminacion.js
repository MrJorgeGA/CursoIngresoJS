/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
function CalcularPrecio ()
{
  //Tomo la cantidad y marca puestas por el usuario
  let cantidad = parseInt(document.getElementById('txtIdCantidad').value);
  let marca = document.getElementById('Marca').value;
  //Fijo el precio básico por unidad y el factor que luego se divide por 100 para modificar el precio según corresponda
  let precio_base = 35;
  let modificador_precio = 100
  //Para verificar que se ha puesto una cantidad correcta de lámparas
  if (cantidad>=1 ) {
    //Tengo 2 rangos, mayor igual a 6 y de 1 a 3. el primero es mas abarcativp, lo pongo como condición de 'if'. El segundo queda como default del switch para los ditintos casos.
    if (cantidad>=6) {modificador_precio = 50}
    else {
      switch (cantidad) {
        case 5:
          //las condiciones internas las resulvo con switch al ser del tipo '=='
          switch (marca) {
            case "ArgentinaLuz":
              modificador_precio = 60;
              break;
            default:
            modificador_precio = 65;
          }
          break;
        case 4:
          switch (marca) {
            case "ArgentinaLuz":
            case "FelipeLamparas":
              modificador_precio = 75;
              break;
            default:
              modificador_precio = 80;
          }
          break;
        case 3:
          switch (marca) {
            case "ArgentinaLuz":
              modificador_precio = 85;
              break;
            case "FelipeLamparas":
              modificador_precio = 90;
              break;
            default:
              modificador_precio = 95;
          }
          break;
      };
    };
    //Calculo el precio final, considerando cantidad y factor de modificación dividido por cien
    precio_final = cantidad*precio_base*modificador_precio/100;
    //Lo escribo en el textbox que corresponde
    document.getElementById('txtIdprecioDescuento').value = "$"+precio_final;
    //Verifico si hay que pagar ingresos brutos
    if (precio_final>=120) {
      alert("Usted debe pagar $"+precio_final*10/100+" adicionales por IIBB")
    };
  }
  else {
    //Mensaje que hubo un error en la cantidad ingresada
    alert("Por favor ingrese una cantidad válida");
  };
}
