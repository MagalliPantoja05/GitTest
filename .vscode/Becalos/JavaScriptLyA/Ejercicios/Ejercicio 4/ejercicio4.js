// Sin usar Math.max ni Math.min, encuentra el número mayor y el menor de este arreglo.
const valores = [12, 5, 8, 130, 44];
const mayor = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
const menor = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};