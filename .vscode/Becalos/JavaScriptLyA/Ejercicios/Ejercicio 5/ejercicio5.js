// Escribe una función que determine si una palabra es palíndromo.
const palabra = "anita lava la tina";
const esPalindromo = (str) => {
  const sinEspacios = str.replace(/\s+/g, "");
  const invertida = sinEspacios.split("").reverse().join("");
  return sinEspacios === invertida;
};