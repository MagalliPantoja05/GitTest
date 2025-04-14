// Convierte el siguiente string en un objeto: "nombre:Ivan, edad:23, ciudad:CDMX";
const str = "nombre:Ivan, edad:23, ciudad:CDMX";
const convertirAObjeto = (str) => {
  const obj = {};
  const propiedades = str.split(", ");
  propiedades.forEach((propiedad) => {
    const [clave, valor] = propiedad.split(":");
    obj[clave] = valor;
  });
  return obj;
};