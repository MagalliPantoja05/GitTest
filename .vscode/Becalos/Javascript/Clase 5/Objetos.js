class Libro {
    constructor(titulo, autor, anio, estado) {
      this.titulo = titulo;
      this.autor = autor;
      this.anio = anio;
      this.estado = estado || 'disponible';
    }
  
    describirLibro() {
      return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
    }
}

// Libros
  const libro1 = new Libro('La sombra del Viento', 'Carlos Ruiz Zafón', 2001);
  console.log(libro1.describirLibro()); 
  
  const libro2 = new Libro('El juego del Ángel', 'Carlos Ruiz Zafón', 2008, 'prestado');
  console.log(libro2.describirLibro()); 

  const libro3 = new Libro('El Prisionero del Cielo', 'Carlos Ruiz Zafón', 2011, 'prestado');
  console.log(libro3.describirLibro());

  const libro4 = new Libro('El Laberinto de los Espiritus', 'Carlos Ruiz Zafón', 2016);
  console.log(libro4.describirLibro());