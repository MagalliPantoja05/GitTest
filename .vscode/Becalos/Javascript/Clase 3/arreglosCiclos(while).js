// Arreglo de frutas
const frutas = ["manzana", "banana", "naranja", "manzana", "uva", "banana", "manzana"];

// Objeto para almacenar la cantidad de cada fruta
const cantidadFrutas = {};

// Inicializar el índice
let i = 0;

// Recorrer el arreglo con un ciclo while
while (i < frutas.length) {
  const fruta = frutas[i];

  // Si la fruta ya está en el objeto, aumentar la cantidad
  if (cantidadFrutas[fruta]) {
    cantidadFrutas[fruta]++;
  } else {
    // Si la fruta no está en el objeto, agregarla con cantidad 1
    cantidadFrutas[fruta] = 1;
  }

  // Incrementar el índice
  i++;
}

// Imprimir la cantidad de cada fruta
for (const fruta in cantidadFrutas) {
  console.log(`Cantidad de ${fruta}: ${cantidadFrutas[fruta]}`);
}