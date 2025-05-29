const botonFetch = document.getElementById('boton-fetch');
const botonAxios = document.getElementById('boton-axios');
const dataContainer = document.getElementById('contenedor-datos');

// API's CATs
const APICAT = 'https://api.thecatapi.com/v1/images/search?limit=1'; // fotoGato
const APICATINFO = 'https://catfact.ninja/fact'; // catoCurioso

function mostrarGatos(fotoGato, catoCurioso) {
  dataContainer.innerHTML = '';
  const gatoInfoTarjeta = document.createElement('div');
  gatoInfoTarjeta.classList.add('gato-info-tarjeta')

  if (fotoGato && fotoGato.url) {
    const imagenElemento = document.createElement('img');
    imagenElemento.src = fotoGato.url;
    imagenElemento.alt = "fotogato";
    gatoInfoTarjeta.appendChild(imagenElemento);
  } else {
    const noImagen = document.createElement('p');
    noImagen.textContent = "No se pudo cargar fotogato.";
    gatoInfoTarjeta.appendChild(noImagen);
  }

  if (catoCurioso && catoCurioso.fact) {
    const datoElemento = document.createElement('p');
    datoElemento.textContent = `Cato Curioso: ${catoCurioso.fact}`;
    gatoInfoTarjeta.appendChild(datoElemento);
  } else {
    const noDato = document.createElement('p');
    noDato.textContent = "No se pudo cargar el cato curioso.";
    gatoInfoTarjeta.appendChild(noDato);
  }

  dataContainer.appendChild(gatoInfoTarjeta);
}

function mostrarError(mensaje) {
  dataContainer.innerHTML = `<p class="mensaje-error">${mensaje}</p>`;
}

botonFetch.addEventListener('click', () => {
  dataContainer.innerHTML = '<p>Cargando gato y dato con Fetch...</p>';

  Promise.all([
    fetch(APICAT).then(response => {
      if (!response.ok) throw new Error(`Error imagen: ${response.status}`);
      return response.json();
    }),
    fetch(APICATINFO).then(response => {
      if (!response.ok) throw new Error(`Error dato: ${response.status}`);
      return response.json();
    })
  ])
    .then(resultados => {
      const fotoGatoRecibida = resultados[0][0];
      const catoCuriosoRecibido = resultados[1];

      mostrarGatos(fotoGatoRecibida, catoCuriosoRecibido);
    })
    .catch(error => {
      console.error('Error al obtener datos con Fetch:', error);
      mostrarError('Hubo un problema al obtener el gato o su dato. Intenta de nuevo.');
    });
});

botonAxios.addEventListener('click', () => {
  dataContainer.innerHTML = '<p>Cargando gato y dato con Axios...</p>';

  Promise.all([
    axios.get(APICAT),
    axios.get(APICATINFO)
  ])
    .then(responses => {
      const fotoGatoRecibida = responses[0].data[0];
      const catoCuriosoRecibido = responses[1].data;

      mostrarGatos(fotoGatoRecibida, catoCuriosoRecibido);
    })
    .catch(error => {
      console.error('Error al obtener datos con Axios:', error);
      if (error.response) {
        mostrarError(`¡Error del servidor! Código: ${error.response.status}. Mensaje: ${error.response.data ? error.response.data.message : 'Desconocido'}`);
      } else if (error.request) {
        mostrarError('No se recibió respuesta del servidor. ¿Estás conectado a internet?');
      } else {
        mostrarError('Algo inesperado ocurrió al configurar la petición Axios.');
      }
    });
});