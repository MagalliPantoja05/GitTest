const fs = require('fs');

const archivoNotas = './notas.json';

// Crear un archivo JSON para almacenar las notas
function crearNota(titulo, contenido) {
  let notas = [];
  if (fs.existsSync(archivoNotas)) {
    let datos = fs.readFileSync(archivoNotas, 'utf8');
    notas = JSON.parse(datos);
  }
  notas.push({ titulo: titulo, contenido: contenido });
  fs.writeFileSync(archivoNotas, JSON.stringify(notas));
  console.log('Nota creada.');
}

// Mostrar todas las notas
function mostrarNotas() {
  if (fs.existsSync(archivoNotas)) {
    let datos = fs.readFileSync(archivoNotas, 'utf8');
    let notas = JSON.parse(datos);
    for (let i = 0; i < notas.length; i++) {
      console.log(notas[i].titulo + ': ' + notas[i].contenido);
    }
  } else {
    console.log('No hay notas.');
  }
}

// Borrar una nota por su título
function borrarNota(titulo) {
  if (fs.existsSync(archivoNotas)) {
    let datos = fs.readFileSync(archivoNotas, 'utf8');
    let notas = JSON.parse(datos);
    let notasRestantes = [];
    for (let i = 0; i < notas.length; i++) {
      if (notas[i].titulo !== titulo) {
        notasRestantes.push(notas[i]);
      }
    }
    fs.writeFileSync(archivoNotas, JSON.stringify(notasRestantes));
    console.log('Nota borrada.');
  } else {
    console.log('No hay notas para borrar.');
  }
}

// Ejemplo
crearNota('Compras', 'Leche, pan');
crearNota('Trabajo', 'Reporte semanal');
mostrarNotas();
borrarNota('Compras');
mostrarNotas();