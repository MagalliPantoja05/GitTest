import React from 'react';
import { Link } from 'react-router-dom';

const citasEjemplo = [
  { id: 1, paciente: "Juan Pérez", fecha: "2023-10-26", hora: "10:00 AM", medico: "Dra. Ana Gómez" },
  { id: 2, paciente: "María López", fecha: "2023-10-27", hora: "03:30 PM", medico: "Dr. Carlos Ruiz" },
  { id: 3, paciente: "Pedro García", fecha: "2023-10-28", hora: "09:15 AM", medico: "Dra. Laura Fernández" },
];

function Citas() {
  return (
    <div className="page-container">
      <h2>Lista de Citas Médicas</h2>
      {citasEjemplo.length === 0 ? (
        <p>No hay citas programadas.</p>
      ) : (
        <ul>
          {citasEjemplo.map(cita => (
            <li key={cita.id}>
              <Link to={`/cita/${cita.id}`}>
                {cita.paciente} - {cita.fecha} {cita.hora}
              </Link>
              <span>Dr/a. {cita.medico}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Citas;