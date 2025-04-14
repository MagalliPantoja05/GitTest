/*Planificador de Viajes.
Permite a los Usuarios:
- Registrar destinos y fechas
- Calcular el costo total del viaje
*/

// Código Inicial
// Array para guardar los destinos (const porque no cambia la referencia)
const destinos = [];

// Función para registrar un destino de viaje (función de flecha)
const registrarDestino = (destino, fecha, transporte) => {
    // Objeto con los datos del destino
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje (función de flecha)
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    switch (destino) {
        case "Paris":
            costoBase = 500;
            break;
        case "Londres":
            costoBase = 400;
            break;
        case "New York":
            costoBase = 600;
            break;
        default:
            costoBase = 0; // Agregamos un caso por defecto
    }

    // Costo adicional por tipo de transporte
    switch (transporte) {
        case "Avión":
            costoBase += 200;
            break;
        case "Tren":
            costoBase += 100;
            break;
        default:
            // No se agrega costo adicional si no es Avión o Tren.
    }

    return costoBase;
};

// Función para mostrar el itinerario de los viajes registrados (función de flecha)
const mostrarItinerario = () => {
    // Recorrer el arreglo de destinos y mostrar la información de cada uno
    destinos.forEach(viaje => {
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    });
};

//Exportar las funciones para poder usarlas en app.js
export { registrarDestino, calcularCosto, mostrarItinerario };