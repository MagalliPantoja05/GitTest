// Filtra los elementos "falsy" (false, 0, ", null, undefined, NaN) de un arreglo.
const mezcla = [120, "Hello", false, 42, "", undefined, "JS"];
const filtrarFalsy = (arr) => {
  return arr.filter(Boolean);
};
const resultado = filtrarFalsy(mezcla);
console.log(resultado); 
