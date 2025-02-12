// Arreglo de frutas
const frutas = ["manzana", "banana", "naranja", "manzana", "uva", "banana", "manzana"];

// Objeto para almacenar la cantidad de cada fruta
const cantidadFrutas = {};

// Recorrer el arreglo con un ciclo for
for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];

  // Si la fruta ya existe en el objeto, aumentar su cantidad
  if (cantidadFrutas[fruta]) {
    cantidadFrutas[fruta]++;
  } else {
    // Si la fruta no existe, agregarla al objeto con cantidad 1
    cantidadFrutas[fruta] = 1;
  }
}

// Imprimir la cantidad de cada fruta
for (const fruta in cantidadFrutas) {
  console.log(`${fruta}: ${cantidadFrutas[fruta]}`);
}