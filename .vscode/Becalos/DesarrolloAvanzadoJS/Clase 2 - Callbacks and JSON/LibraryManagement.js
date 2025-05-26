let biblioteca = {
    "listaLibros": [
        { "titulo": "La sombra del Viento", "autor": "Carlos Ruiz Zafón", "genero": "Misterio", "Disponible": true },
        { "titulo": "El juego del Ángel", "autor": "Carlos Ruiz Zafón", "genero": "Misterio", "Disponible": true },
        { "titulo": "El Prisionero del Cielo", "autor": "Carlos Ruiz Zafón", "genero": "Misterio", "Disponible": true },
        { "titulo": "El Laberinto de los Espiritus", "autor": "Carlos Ruiz Zafón", "genero": "Misterio", "Disponible": true }
    ]
};

// Tareas

// 1. Consultar libros: Mostrar todos los libros almacenados en formato JSON
function leerLibros(terminarLeer) {
    console.log("Simulando que estamos leyendo los libros...");
    setTimeout(() => {
        terminarLeer(biblioteca);
    }, 1500);
}

// 2. Agregar libros: Permitir al usuario agregar un libro a la colección
// - Guardar libros 
function guardarLibros(datosGuardar, terminarGuardar) {
    console.log("Simulando que estamos guardando los cambios...");
    setTimeout(() => {
        if (terminarGuardar) {
            terminarGuardar();
        }
    }, 1000);
}

// - Mostrar libros
function mostrarInventario() {
    console.log("\n--- INVENTARIO ACTUAL DE LIBROS ---");
    leerLibros((datosLeidos) => {
        if (datosLeidos.listaLibros.length === 0) {
            console.log("¡La biblioteca está vacía!");
            return;
        }
        for (let i = 0; i < datosLeidos.listaLibros.length; i++) {
            let libroActual = datosLeidos.listaLibros[i];
            let estado = libroActual.disponible ? 'Disponible' : 'Prestado';
            console.log(`${i + 1}. Título: "${libroActual.titulo}" | Autor: ${libroActual.autor} | Género: ${libroActual.genero} | Estado: ${estado}`);
        }
        console.log("--- FIN DEL INVENTARIO ---");
    });
}

// - Añadir libro nuevo
function añadirNuevoLibro(titulo, autor, genero, disponible) {
    console.log(`\nIntentando añadir el libro: "${titulo}"...`);
    leerLibros((datosActuales) => {
        const nuevoLibro = {
            titulo: titulo,
            autor: autor,
            genero: genero,
            disponible: disponible
        };
        datosActuales.listaLibros.push(nuevoLibro);

        guardarLibros(datosActuales, () => {
            console.log(`¡Libro "${titulo}" añadido con éxito!`);
            mostrarInventario();
        });
    });
}

// 3. Actualizar la disponibilidad: Cambiar el estado de disponibilidad de un libro a 'prestado' o 'disponible'.
function cambiarDisponibilidad(tituloLibro, nuevoEstado) {
    console.log(`\nIntentando actualizar el libro: "${tituloLibro}" a ${nuevoEstado ? 'Disponible' : 'Prestado'}...`);
    leerLibros((datosActuales) => {
        let libroEncontrado = null;
        for (let i = 0; i < datosActuales.listaLibros.length; i++) {
            if (datosActuales.listaLibros[i].titulo === tituloLibro) {
                libroEncontrado = datosActuales.listaLibros[i];
                break;
            }
        } if (libroEncontrado) {
            libroEncontrado.disponible = nuevoEstado;
            guardarLibros(datosActuales, () => {
                console.log(`¡Estado de "${tituloLibro}" actualizado a ${nuevoEstado ? 'DISPONIBLE' : 'PRESTADO'}!`);
                mostrarInventario();
            });
        } else {
            console.log(`El libro "${tituloLibro}" no se encontró en la biblioteca.`);
        }
    });
}

// *** Ejemplo de cómo ejecutar la aplicación ***

// 1. Mostrar los libros al inicio
mostrarInventario();

// 2. Añadir un nuevo libro
setTimeout(() => {
    añadirNuevoLibro("El Princípe de la Niebla", "Carlos Ruiz Zafón", "Misterio", true);
}, 2000);

// 3. Cambiar la disponibilidad de un libro existente
setTimeout(() => {
    cambiarDisponibilidad("Las Luces de Septiembre", false);
}, 5000);