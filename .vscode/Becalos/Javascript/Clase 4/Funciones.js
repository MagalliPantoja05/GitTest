// Array para almacenar los libros
let librosLeidos = [];

// Añade un libro a un array llamado `librosLeidos`
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro "${titulo}" agregado a la lista.`);
}

// Imprime todos los libros que he leído
function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    librosLeidos.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro}`);
    });
}

// Libros leídos
agregarLibro("La sombra del Viento");
agregarLibro("El Juego del Ángel");
agregarLibro("El Prisionero del Cielo");
agregarLibro("El Laberinto de los Espiritus");
agregarLibro("Pensandolo bien, pensé mal");
agregarLibro("Pesadillas para Cenar");
agregarLibro("Odio Odiar");

mostrarLibrosLeidos();
