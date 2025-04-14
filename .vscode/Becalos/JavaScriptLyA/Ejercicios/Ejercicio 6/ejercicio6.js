// Encuentra el segundo número más grande de un arreglo sin usar sort.
const num = [12, 35, 1 , 10, 34, 1];
const segundoMayor = (arr) => {
  let mayor = -Infinity;
  let segundo = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mayor) {
      segundo = mayor;
      mayor = arr[i];
    } else if (arr[i] > segundo && arr[i] !== mayor) {
      segundo = arr[i];
    }
  }
  return segundo;
};