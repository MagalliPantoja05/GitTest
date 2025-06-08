import { useState } from "react";

function ListaCompras() {
// Definir el estado para la lista de compras
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

// Función para agregar un nuevo producto a la lista
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

// Función para eliminar un producto de la lista
  const eliminarProducto = (indexAEliminar) => {
    const listaActualizada = productos.filter((_, i) => i !== indexAEliminar);
    setProductos(listaActualizada);
  };
  return (
    <div>
      <h2>Anota a continuación:</h2>
      {/* Campo de entrada para escribir el nuevo producto */}
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
        placeholder="Añadir nuevo producto..."
      />
      {/* Botón para agregar el producto */}
      <button onClick={agregarProducto}>Agregar</button>

      {/* Lista de productos */}
      <ul>
        {/* Usamos .map() para recorrer el array 'productos'.
            Por cada 'producto' en el array, creamos un elemento <li>. */}
        {productos.map((producto, index) => (
          <li key={index}>
            {producto} {/* Mostramos el nombre del producto */}
            {/* Botón para eliminar: al hacer click, llama a eliminarProducto con el 'index' */}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;