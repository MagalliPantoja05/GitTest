// Dado un arreglo de números desordenado, ordénalas de menor a mayor usando sort y uma función de comparación.
const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);