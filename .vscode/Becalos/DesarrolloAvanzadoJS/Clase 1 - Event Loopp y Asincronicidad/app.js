const listaPedidos = document.getElementById('listaPedidos');
const botonAgregarPedido = document.getElementById('botonAgregarPedido');

// 2.1. Recepción de un nuevo pedido
let siguienteIdPedido = 1; // Para identificar los pedidos

// 2.2. Actualización visual del estado de los pedidos
botonAgregarPedido.addEventListener('click', () => {
    const miPedido = {
        id: siguienteIdPedido++,
        estado: 'En Proceso'
    };
    mostrarPedido(miPedido);
    prepararPedido(miPedido);
});

// 2.3. Simulación de la preparación de pedidos
function mostrarPedido(pedido) {
    const elementoDeLista = document.createElement('li');
    elementoDeLista.id = `pedido-${pedido.id}`; // 3.1. Se generará un pedido con un identificador único
    elementoDeLista.textContent = `Pedido #${pedido.id}: ${pedido.estado}`;
    elementoDeLista.classList.add('en-proceso'); // 3.2. Se mostrará en la interfaz con el estado 'En Proceso'

    listaPedidos.appendChild(elementoDeLista);
}

function actualizarEstado(pedido, nuevoEstado) {
    const elementoDeLista = document.getElementById(`pedido-${pedido.id}`);
    if (elementoDeLista) {
        elementoDeLista.textContent = `Pedido #${pedido.id}: ${nuevoEstado}`;
// 3.3. Después de un tiempo aleatorio (simulando la preparación), el estado cambiará a 'Completado'
        elementoDeLista.classList.remove('en-proceso');
        if (nuevoEstado === 'Completado') {
            elementoDeLista.classList.add('completado');
        }
    }
}

// 4. Mecanismos asincrónicos
async function prepararPedido(pedido) {
    console.log(`El Pedido #${pedido.id} está empezando a prepararse.`);

    const duracionPreparacion = Math.random() * 3000 + 1000;

    await new Promise(resolve => {
        setTimeout(() => {
            console.log(`El Pedido #${pedido.id} terminó de prepararse.`);
            resolve();
        }, duracionPreparacion);
    });

    actualizarEstado(pedido, 'Completado');
}