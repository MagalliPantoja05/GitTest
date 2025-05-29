const formularioRegistro = document.getElementById('registroEvento');

// Mensajes de error
const errorNombre = document.getElementById('error-nombre');
const errorCorreo = document.getElementById('error-correo');
const errorTelefono = document.getElementById('error-telefono');
const errorIntereses = document.getElementById('error-intereses');
const errorHorario = document.getElementById('error-horario');
const errorFecha = document.getElementById('error-fecha');
const errorHora = document.getElementById('error-hora');
const errorArchivo = document.getElementById('error-archivo');
// Mensaje de éxito general
const mensajeGeneral = document.getElementById('mensaje-general-exito');

// Función al enviar el formulario
formularioRegistro.addEventListener('submit', function(event) {
  event.preventDefault();
  limpiarErroresAnteriores();
  let todoEstaEnOrden = true;

  // Variables
  const nombreUsuario = document.getElementById('nombre').value.trim();
  const correoUsuario = document.getElementById('correo').value.trim();
  const telefonoUsuario = document.getElementById('telefono').value.trim();
  const fechaEvento = document.getElementById('fecha').value;
  const horaEvento = document.getElementById('hora').value;
  const archivoSubido = document.getElementById('archivo').files[0];

  // Obtener checkboxes de intereses
  const interesesSeleccionados = document.querySelectorAll('input[name="intereses"]:checked');
  // Obtener el horario seleccionado (radio buttons)
  const horarioElegido = document.querySelector('input[name="horario"]:checked');

  // Validaciones
  // Validación 1: Nombre
  if (nombreUsuario === '') {
    mostrarErrorCampo(errorNombre, '¡Oops! Tu nombre no puede estar vacío.');
    marcarCampoInvalido('nombre');
    todoEstaEnOrden = false;
  } else if (nombreUsuario.length < 3) {
    mostrarErrorCampo(errorNombre, 'Tu nombre debe tener al menos 3 letras, por favor.');
    marcarCampoInvalido('nombre');
    todoEstaEnOrden = false;
  }

  // Validación 2: Correo electrónico
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correoUsuario === '') {
    mostrarErrorCampo(errorCorreo, '¡Necesitamos tu correo, por favor!');
    marcarCampoInvalido('correo');
    todoEstaEnOrden = false;
  } else if (!patronCorreo.test(correoUsuario)) {
    mostrarErrorCampo(errorCorreo, 'Parece que el correo no es válido. ¿Falta un "@" o un ".com"?');
    marcarCampoInvalido('correo');
    todoEstaEnOrden = false;
  }

  // Validación 3: Teléfono
  const patronTelefono = /^[0-9]{10}$/;
  if (telefonoUsuario === '') {
    mostrarErrorCampo(errorTelefono, 'El teléfono es importante para contactarte.');
    marcarCampoInvalido('telefono');
    todoEstaEnOrden = false;
  } else if (!patronTelefono.test(telefonoUsuario)) {
    mostrarErrorCampo(errorTelefono, 'El teléfono debe ser de 10 números, sin espacios ni guiones.');
    marcarCampoInvalido('telefono');
    todoEstaEnOrden = false;
  }

  // Validación 4: Intereses
  if (interesesSeleccionados.length === 0) {
    mostrarErrorCampo(errorIntereses, '¡Cuéntanos! Selecciona al menos un interés.');
    todoEstaEnOrden = false;
  }

  // Validación 5: Horario
  if (!horarioElegido) {
    mostrarErrorCampo(errorHorario, '¿En qué horario te gustaría asistir? Elige uno.');
    todoEstaEnOrden = false;
  }

  // Validación 6: Fecha
  if (fechaEvento === '') {
    mostrarErrorCampo(errorFecha, 'Por favor, selecciona una fecha para el evento.');
    marcarCampoInvalido('fecha');
    todoEstaEnOrden = false;
  } else {
    const fechaConvertida = new Date(fechaEvento);
    const fechaDeHoy = new Date();
    fechaDeHoy.setHours(0, 0, 0, 0);

    if (fechaConvertida < fechaDeHoy) {
      mostrarErrorCampo(errorFecha, '¡Uy! No puedes elegir una fecha en el pasado.');
      marcarCampoInvalido('fecha');
      todoEstaEnOrden = false;
    }
  }

  // Validación 7: Hora
  if (horaEvento === '') {
    mostrarErrorCampo(errorHora, 'Por favor, selecciona una hora para el evento.');
    marcarCampoInvalido('hora');
    todoEstaEnOrden = false;
  } else {
    const horaNumero = parseInt(horaEvento.replace(':', ''));
    if (horaNumero < 800 || horaNumero > 2200) {
      mostrarErrorCampo(errorHora, 'La hora debe ser entre las 08:00 AM y las 10:00 PM.');
      marcarCampoInvalido('hora');
      todoEstaEnOrden = false;
    }
  }

  // Validación 8: Archivo (opcional)
  if (archivoSubido) {
    const tiposPermitidos = ['application/pdf', 'image/jpeg', 'image/png'];
    const tamañoMaximoEnMB = 5;
    const tamañoMaximoEnBytes = tamañoMaximoEnMB * 1024 * 1024;

    if (!tiposPermitidos.includes(archivoSubido.type)) {
      mostrarErrorCampo(errorArchivo, 'Solo puedes subir archivos PDF, JPG o PNG.');
      marcarCampoInvalido('archivo');
      todoEstaEnOrden = false;
    }

    if (archivoSubido.size > tamañoMaximoEnBytes) {
      mostrarErrorCampo(errorArchivo, `El archivo es demasiado grande (máx. ${tamañoMaximoEnMB} MB).`);
      marcarCampoInvalido('archivo');
      todoEstaEnOrden = false;
    }
  }

  if (todoEstaEnOrden) {
    mostrarMensajeGeneral('¡Éxito! Tu registro ha sido enviado. ¡Gracias!', 'exito');

    console.log('--- Datos de Registro Listos para Envío ---');
    console.log('Nombre:', nombreUsuario);
    console.log('Correo:', correoUsuario);
    console.log('Teléfono:', telefonoUsuario);
    console.log('Intereses seleccionados:', Array.from(interesesSeleccionados).map(cb => cb.value));
    console.log('Horario preferido:', horarioElegido ? horarioElegido.value : 'No especificado');
    console.log('Fecha del Evento:', fechaEvento);
    console.log('Hora del Evento:', horaEvento);
    console.log('Documento subido:', archivoSubido ? archivoSubido.name : 'Ninguno');
    console.log('-------------------------------------------');
    formularioRegistro.reset();

    setTimeout(() => {
      mensajeGeneral.textContent = '';
      mensajeGeneral.classList.remove('mensaje-exito');
    }, 5000);

  } else {
    mostrarMensajeGeneral('Por favor, revisa los campos marcados con rojo. ¡Algo no está bien!', 'error');

    setTimeout(() => {
      mensajeGeneral.textContent = '';
      mensajeGeneral.classList.remove('mensaje-error');
    }, 5000);
  }
});

// Función mostrar error en el párrafo correspondiente
function mostrarErrorCampo(elementoPError, mensaje) {
  elementoPError.textContent = mensaje;
}

// Función añadir clase 'invalido' al campo correspondiente
function marcarCampoInvalido(idDelCampo) {
  const campoInput = document.getElementById(idDelCampo);
  if (campoInput) {
    campoInput.classList.add('invalido');
  }
}

// Función quitar mensajes de error anteriores
function limpiarErroresAnteriores() {
  const todosLosMensajesDeError = document.querySelectorAll('.mensaje-error');
  todosLosMensajesDeError.forEach(parrafo => {
    parrafo.textContent = '';
  });

  const todosLosCamposInvalidos = document.querySelectorAll('.invalido');
  todosLosCamposInvalidos.forEach(campo => {
    campo.classList.remove('invalido');
  });

  mensajeGeneral.textContent = '';
  mensajeGeneral.classList.remove('mensaje-exito', 'mensaje-error');
}

// Función mostrar el mensaje general de éxito o error
function mostrarMensajeGeneral(mensaje, tipo) {
  mensajeGeneral.textContent = mensaje;
  if (tipo === 'exito') {
    mensajeGeneral.classList.add('mensaje-exito');
    mensajeGeneral.classList.remove('mensaje-error');
  } else if (tipo === 'error') {
    mensajeGeneral.classList.add('mensaje-error');
    mensajeGeneral.classList.remove('mensaje-exito');
  }
}