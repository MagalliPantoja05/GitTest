// Lista de regalos
const regalos = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función para buscar un regalo en la lista
function buscarRegalo(listaRegalos, nombreRegalo, indice = 0) {
  // Si llega al final de la lista, no encontró el regalo
  if (indice === listaRegalos.length) {
    return nombreRegalo + " no está en la lista.";
  }

  // Si encuentra el regalo, indica en qué posición está
  if (listaRegalos[indice] === nombreRegalo) {
    return nombreRegalo + " está en la posición " + indice + ".";
  }

  // Si no encuentra el regalo
  return buscarRegalo(listaRegalos, nombreRegalo, indice + 1);
}

// Ejemplos
let regaloBuscado = "Lego";
console.log(buscarRegalo(regalos, regaloBuscado));

regaloBuscado = "Camión";
console.log(buscarRegalo(regalos, regaloBuscado)); 