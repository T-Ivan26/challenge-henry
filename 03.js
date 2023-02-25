/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function sumaTodosPrimos(array) {
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.

  // Tu código aca:
  function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
  }

  let suma = 0;
  for (var i = 0; i < array.length; i++) {
    let num = array[i];
    if (esPrimo(num)) {
        suma += num;
    }
    
  }
  return suma;
}
console.log(sumaTodosPrimos([2,5,6,7,8,9,10,2,3,4,5,6]))

// No modifiques nada debajo de esta linea //

module.exports = sumaTodosPrimos