// Elimina los elementos duplicados de este arreglo sin usar set.
const duplicados = [1, 2, 2, 3, 4, 4, 5];
const sinDuplicados = (arr) => {
  const nuevoArreglo = [];
  for (let i = 0; i < arr.length; i++) {
    if (!nuevoArreglo.includes(arr[i])) {
      nuevoArreglo.push(arr[i]);
    }
  }
  return nuevoArreglo;
};