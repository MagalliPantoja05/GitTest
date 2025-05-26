// Simulando una base de datos de mesas
let mesasDisponibles = 5;

// Verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    console.log(`Verificando si hay ${mesasSolicitadas} mesas disponibles...`);
    setTimeout(() => {
    if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`¡Hay ${mesasSolicitadas} mesas disponibles!`);
      } else {
        reject(`Lo sentimos, no hay suficientes mesas. Quedan ${mesasDisponibles} disponibles.`);
      }
    }, 2000);
  });
}

// Envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    console.log(`Enviando correo de confirmación a ${nombreCliente}...`);
    setTimeout(() => {
      const exitoAlEnviar = Math.random() > 0.3;

      if (exitoAlEnviar) {
        resolve(`¡Confirmación enviada a ${nombreCliente} con éxito!`);
      } else {
        reject(`Error al enviar el correo de confirmación a ${nombreCliente}.`);
      }
    }, 1500);
  });
}

// Hacer una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log(`\n--- Nueva reserva para ${nombreCliente} (mesas: ${mesasSolicitadas}) ---`);
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    mesasDisponibles -= mesasSolicitadas;
    console.log(`Mesas restantes: ${mesasDisponibles}`);

    const mensajeConfirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(mensajeConfirmacion);

    console.log(`¡Reserva de ${mesasSolicitadas} mesas para ${nombreCliente} completada!`);

  } catch (error) {
    console.error("Error en la reserva:", error);
  }
}

// Primera prueba de reserva
hacerReserva("Juan Pérez", 3);
// Segunda prueba de reserva
setTimeout(() => {
  hacerReserva("Pedro Gómez", 2);
}, 6000);
// Tercera prueba de reserva
setTimeout(() => {
  hacerReserva("María Sol", 4);
}, 12000);