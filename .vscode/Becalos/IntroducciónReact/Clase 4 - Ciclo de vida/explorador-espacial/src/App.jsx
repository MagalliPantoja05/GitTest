import React, { useState, useEffect, useMemo, useRef } from 'react';
import Planeta from './Planeta';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState(() => {
    try {
      const storedPlanetas = localStorage.getItem('planetasBitacora');
      return storedPlanetas ? JSON.parse(storedPlanetas) : [];
    } catch (error) {
      console.error("Error al cargar planetas de localStorage:", error);
      return [];
    }
  });

  const [nombrePlaneta, setNombrePlaneta] = useState('');
  const [descripcionPlaneta, setDescripcionPlaneta] = useState('');
  const [imagenPlaneta, setImagenPlaneta] = useState(null);
  const inputImagenRef = useRef(null);

  useEffect(() => {
    console.log("¡El panel de control está listo! Iniciando secuencia de vuelo...");
    const intervaloVuelo = setInterval(() => {
      setDistancia(prevDistancia => prevDistancia + 100);
      setCombustible(prevCombustible => {
        const nuevoCombustible = prevCombustible - 1;
        if (nuevoCombustible <= 0) {
          clearInterval(intervaloVuelo);
          setEstadoNave("Sin combustible");
          return 0;
        }
        return nuevoCombustible;
      });
    }, 1000);

    return () => {
      clearInterval(intervaloVuelo);
      console.log("El panel de control se ha apagado. Vuelo terminado.");
    };
  }, []);

  useEffect(() => {
    console.log(`¡Combustible actualizado! Queda ${combustible}%`);
    if (combustible === 20 && estadoNave === "En órbita") {
      setEstadoNave("Combustible bajo");
    } else if (combustible === 0 && estadoNave !== "Sin combustible") {
      setEstadoNave("A la deriva (sin combustible)");
    }
  }, [combustible, estadoNave]);

  const mensajeEstado = useMemo(() => {
    console.log("Cálculo: Actualizando mensaje de estado de la nave...");
    let mensaje = `Estado: ${estadoNave}.`;
    if (estadoNave === "Aterrizando") {
      mensaje += " Preparando para descenso.";
    } else if (estadoNave === "Sin combustible") {
      mensaje += " ¡Necesitamos asistencia!";
    }
    return mensaje;
  }, [estadoNave]);

  const handleAterrizar = () => {
    setEstadoNave("Aterrizando");
    const posiblesPlanetas = ["Tierra 2.0", "Marte Rojo", "Luna Escondida", "Gaseoso Azul"];
    const planetaAleatorio = posiblesPlanetas[Math.floor(Math.random() * posiblesPlanetas.length)];
    setPlanetasVisitados(prevPlanetas => [...prevPlanetas, {
      id: Date.now(),
      nombre: planetaAleatorio,
      descripcion: `Planeta descubierto al aterrizar. Distancia: ${distancia} km.`,
      imagen: null
    }]);
    console.log(`¡Aterrizando! Visitando ${planetaAleatorio}.`);
  };

  useEffect(() => {
    console.log("Guardando bitácora en localStorage...");
    localStorage.setItem('planetasBitacora', JSON.stringify(planetasVisitados));
  }, [planetasVisitados]);

  const handleSubmitPlaneta = (e) => {
    e.preventDefault();
    if (nombrePlaneta.trim() === '' || descripcionPlaneta.trim() === '') {
      alert("Por favor, ingresa el nombre y la descripción del planeta.");
      return;
    }
    let imageUrl = null;
    if (imagenPlaneta) {
      imageUrl = URL.createObjectURL(imagenPlaneta);
    }
    const nuevoPlanetaRegistro = {
      id: Date.now(),
      nombre: nombrePlaneta.trim(),
      descripcion: descripcionPlaneta.trim(),
      imagen: imageUrl,
    };
    setPlanetasVisitados(prevPlanetas => [...prevPlanetas, nuevoPlanetaRegistro]);
    setNombrePlaneta('');
    setDescripcionPlaneta('');
    setImagenPlaneta(null);
    if (inputImagenRef.current) {
      inputImagenRef.current.value = '';
    }
  };

  const handleDeletePlaneta = (idAEliminar) => {
    const listaActualizada = planetasVisitados.filter(planeta => planeta.id !== idAEliminar);
    setPlanetasVisitados(listaActualizada);
    console.log(`Planeta con ID ${idAEliminar} eliminado.`);
  };

  return (
    <div className="app-container">
      <h1>Explorador Espacial</h1>
      <div className="panel-control">
        <h2>Panel de Control</h2>
        <p>Distancia Recorrida: {distancia} unidades</p>
        <p>Combustible Restante: {combustible}%</p>
        <p>{mensajeEstado}</p>
        {estadoNave === "En órbita" && (
          <button onClick={handleAterrizar}>Aterrizar en Nuevo Planeta</button>
        )}
      </div>

      <div className="bitacora-exploracion">
        <h2>Bitácora de Exploración</h2>
        <form onSubmit={handleSubmitPlaneta} className="formulario-bitacora">
          <h3>Registrar Nuevo Planeta</h3>
          <input
            type="text"
            placeholder="Nombre del Planeta"
            value={nombrePlaneta}
            onChange={(e) => setNombrePlaneta(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción detallada del planeta"
            value={descripcionPlaneta}
            onChange={(e) => setDescripcionPlaneta(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagenPlaneta(e.target.files[0])}
            ref={inputImagenRef}
          />
          <button type="submit">Guardar en Bitácora</button>
        </form>

        <h3>Planetas Registrados</h3>
        {planetasVisitados.length === 0 ? (
          <p>No hay planetas registrados en la bitácora. ¡Añade uno!</p>
        ) : (
          <ul className="bitacora-lista">
            {planetasVisitados.map((planeta) => (
              <li key={planeta.id}>
                <h3>{planeta.nombre}</h3>
                <p>{planeta.descripcion}</p>
                {planeta.imagen && (
                  <img src={planeta.imagen} alt={`Imagen de ${planeta.nombre}`} />
                )}
                <button className="btn-eliminar" onClick={() => handleDeletePlaneta(planeta.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;