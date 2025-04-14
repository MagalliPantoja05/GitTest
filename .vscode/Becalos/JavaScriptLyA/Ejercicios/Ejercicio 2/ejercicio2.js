// Escribe una función que tome un arreglo y lo devuelva invertido sin usar .reverse()
const original = [14, 23, 32, 24, 45];
const invertido = (arr) => {
  const nuevoArreglo = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    nuevoArreglo.push(arr[i]);
  }
  return nuevoArreglo;
};