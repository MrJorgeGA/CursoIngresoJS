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
 	let cantidad = parseInt(document.getElementById('txtIdCantidad').value);
  let marca = document.getElementById('Marca').value;
  let precio_base = 35;
  let modificador_precio = 100
  if (cantidad>=1 ) {
    if (cantidad>=6) {modificador_precio = 50}
    else {
      switch (cantidad) {
        case 5:
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
    precio_final = cantidad*precio_base*modificador_precio/100;
    document.getElementById('txtIdprecioDescuento').value = "$"+precio_final;
    if (precio_final>=120) {
      alert("Usted debe pagar $"+precio_final*10/100+" adicionales por IIBB")
    };
  }
  else {
    alert("Por favor ingrese una cantidad válida");
  };
}
