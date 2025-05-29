const planetas = require('./planetas');

console.log('--- ¡Reporte de Expedición Espacial! ---');
console.log('Estos son los planetas que hemos descubierto y registrado:');
console.log('---------------------------------------');

planetas.forEach(planeta => {
  console.log(`\n¡Planeta: ${planeta.nombre} descubierto!`);
  console.log(`  Descripción: ${planeta.descripcion}`);
  console.log(`  Descubierto en: ${planeta.descubiertoEn}`);
  console.log('---');
});

console.log('\n--- Fin del Reporte ---');
console.log('¡Sigue explorando el cosmos!');