const planetas = require('./planetas');

console.log('¡Construyendo el Registro Planetario!');
console.log('Estos son los planetas que hemos descubierto y registrado:');
console.log('---------------------------------------');

planetas.forEach(planeta => {
  console.log(`\n¡Planeta: ${planeta.nombre} descubierto!`);
  console.log(`  Descripción: ${planeta.descripcion}`);
  console.log(`  Descubierto en: ${planeta.descubiertoEn}`);
  console.log(`  Su clasificación es: ${planeta.clasificacion}`);
  console.log(`  Masa: ${planeta.masa}`);
  console.log(`  Diámetro: ${planeta.diametro}`);
  console.log(`  Órbita: ${planeta.órbita}`);
  console.log(`  Distancia del Sol: ${planeta.distanciaDelSol}`);
  console.log('---');
});

console.log('\n--- Fin del Registro ---');