import React from 'react';
import { useParams, Link } from 'react-router-dom';

const citasEjemplo = [
  { id: 1, paciente: "Juan Pérez", fecha: "2023-10-26", hora: "10:00 AM", medico: "Dra. Ana Gómez", motivo: "Chequeo anual", notas: "Paciente con historial de alergias." },
  { id: 2, paciente: "María López", fecha: "2023-10-27", hora: "03:30 PM", medico: "Dr. Carlos Ruiz", motivo: "Dolor de cabeza persistente", notas: "Solicitar análisis de sangre." },
  { id: 3, paciente: "Pedro García", fecha: "2023-10-28", hora: "09:15 AM", medico: "Dra. Laura Fernández", motivo: "Vacunación", notas: "Preparar vacunas para la gripe." },
];

function CitaDetalle() {
  const { id } = useParams();
  const cita = citasEjemplo.find(c => c.id === parseInt(id));

  if (!cita) {
    return (
      <div className="page-container">
        <h2>Cita No Encontrada</h2>
        <p>Lo sentimos, no pudimos encontrar los detalles de la cita con ID: {id}.</p>
        <p><Link to="/citas" className="button-link">Volver a Citas</Link></p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Detalles de la Cita Médica</h2>
      <h3>Paciente: {cita.paciente}</h3>
      <p><strong>ID de la cita:</strong> {cita.id}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
      <p><strong>Médico:</strong> {cita.medico}</p>
      <p><strong>Motivo:</strong> {cita.motivo}</p>
      <p><strong>Notas:</strong> {cita.notas || "No hay notas adicionales."}</p>
      <p>
        <Link to="/citas" className="button-link">Volver a la lista de Citas</Link>
      </p>
    </div>
  );
}

export default CitaDetalle;