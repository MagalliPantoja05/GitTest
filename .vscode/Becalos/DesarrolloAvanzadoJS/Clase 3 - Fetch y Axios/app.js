const botonFetch = document.getElementById('boton-fetch');
const botonAxios = document.getElementById('boton-axios');
const contenedorDatos = document.getElementById('contenedor-datos');

// API -> Cat Facts
const APICAT = 'https://catfact.ninja/fact';

// Mostrar un dato
function mostrarDatoDeGato(dato) {
  contenedorDatos.textContent = dato;
  contenedorDatos.classList.remove('error');
}

// En caso de error
function mostrarError(mensaje) {
  contenedorDatos.textContent = 'Hubo un error: ' + mensaje;
  contenedorDatos.classList.add('error');
}

// Obtener datos usando Fetch
botonFetch.addEventListener('click', () => {
  contenedorDatos.textContent = 'Cargando datogato con Fetch...';

  fetch(APICAT) // Solicitud a la API
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error('La red no respondió bien. Código: ' + respuesta.status);
      } return respuesta.json();
    })
    .then(datosRecibidos => {
      mostrarDatoDeGato(datosRecibidos.fact);
    })
    .catch(error => {
      console.error('Error con Fetch:', error);
      mostrarError('No se pudo obtener el datogato con Fetch.');
    });
});

// Obtener datos usando Axios
botonAxios.addEventListener('click', () => {
  contenedorDatos.textContent = 'Cargando datogato con Axios...';

  axios.get(APICAT) // Solicitud GET
    .then(respuesta => {
      mostrarDatoDeGato(respuesta.data.fact);
    })
    .catch(error => {
      if (error.response) {
        mostrarError('Error del servidor con Axios: ' + error.response.status);
      } else if (error.request) {
        mostrarError('No hubo respuesta del servidor con Axios.');
      } else {
        mostrarError('Error al configurar la solicitud con Axios.');
      }
    });
});