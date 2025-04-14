function encontrarMaximo(numeros) {
    // Si no hay números, no hay máximo
    if (numeros.length === 0) {
      return undefined;
    }
  
    // Si solo hay un número, ese es el máximo
    if (numeros.length === 1) {
      return numeros[0];
    }
  
    // Dividir la lista en dos partes
    let mitad = Math.floor(numeros.length / 2);
    let izquierda = numeros.slice(0, mitad);
    let derecha = numeros.slice(mitad);
  
    // Encontrar el máximo en cada parte
    let maxIzquierda = encontrarMaximo(izquierda);
    let maxDerecha = encontrarMaximo(derecha);
  
    // Comparar los máximos de ambas partes
    if (maxIzquierda > maxDerecha) {
      return maxIzquierda;
    } else {
      return maxDerecha;
    }
  }
  
  // Ejemplo
  const numeros = [3, 8, 2, 10, 5, 7];
  console.log(encontrarMaximo(numeros));