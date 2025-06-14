import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');

  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("¡Calculando el tiempo total de las tareas!");
    return tareas.reduce((totalAcumulado, tarea) => totalAcumulado + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas


  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
    document.title = `Total Tareas: ${calcularTiempoTotal} minutos`;
    console.log("Título del documento actualizado.");
  }, [calcularTiempoTotal]); // Solo se ejecuta cuando cambian las tareas


  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '' && duracion.trim() !== '') {
      const nuevaTareaObj = {
        nombre: nuevaTarea.trim(),
        duracion: parseInt(duracion.trim())
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    } else {
      alert("Por favor, ingresa el nombre y la duración de la tarea.");
    }
  };

  return (
    <div className="app-container">
      <h1>Contador de Tareas</h1>

      <div className="input-group">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
          aria-label="Nombre de la tarea"
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
          aria-label="Duración en minutos"
          min="0"
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>

      <h2>Lista de Tareas</h2>
      {tareas.length === 0 ? (
        <p>No hay tareas agregadas. ¡Añade una!</p>
      ) : (
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea.nombre}: {tarea.duracion} minutos
            </li>
          ))}
        </ul>
      )}

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;