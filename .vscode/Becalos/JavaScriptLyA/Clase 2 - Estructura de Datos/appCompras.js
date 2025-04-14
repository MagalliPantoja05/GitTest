// Importar las funciones de listaDeCompras.js
import { agregarProducto, eliminarProducto, mostrarLista } from './listaDeCompras.js';

// Ejemplo de uso
agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Manzanas"); // Intento de agregar un duplicado
mostrarLista();

eliminarProducto("Leche");
mostrarLista();

eliminarProducto("Huevos"); // Intento de eliminar un producto inexistente
mostrarLista();