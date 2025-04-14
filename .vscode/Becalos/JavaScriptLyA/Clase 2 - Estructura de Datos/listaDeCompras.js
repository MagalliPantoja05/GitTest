/* Gestionar lista de compras.
El usuario puede:
- Agregar
- Eliminar
- Ver los productos agregados a la lista. */

// Arreglo para almacenar los productos de la lista de compras
const listaDeCompras = [];

// Función para agregar un producto a la lista
const agregarProducto = (producto) => {
    // Verificar si el producto ya existe en la lista
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`"${producto}" ha sido agregado a la lista.`);
    } else {
        console.log(`"${producto}" ya está en la lista.`);
    }
};

// Función para eliminar un producto de la lista
const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto);
    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log(`"${producto}" ha sido eliminado de la lista.`);
    } else {
        console.log(`"${producto}" no se encontró en la lista.`);
    }
};

// Función para mostrar todos los productos de la lista
const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
    } else {
        console.log("Lista de compras:");
        listaDeCompras.forEach((producto, indice) => {
            console.log(`${indice + 1}. ${producto}`);
        });
    }
};

// Exportar las funciones para poder usarlas en app.js
export { agregarProducto, eliminarProducto, mostrarLista };