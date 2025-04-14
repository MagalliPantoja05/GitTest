function encontrarPalabraMasLarga(texto) {
    // Separar el texto en palabras
    let palabras = texto.split(" ");
  
    // La primera palabra es la más larga
    let palabraMasLarga = palabras[0];
  
    // Revisar cada palabra
    for (let i = 1; i < palabras.length; i++) {
      // Si la palabra actual es más larga
      if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
      }
    }
  
    return palabraMasLarga;
  }
  
  const texto = "JavaScript es un lenguaje de programación increíble para aprender.";
  
  // Busca la palabra más larga
  console.log(encontrarPalabraMasLarga(texto)); 