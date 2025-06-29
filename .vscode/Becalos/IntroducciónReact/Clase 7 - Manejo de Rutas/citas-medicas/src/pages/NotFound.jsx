import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container page-container">
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p>
        <Link to="/" className="button-link">Volver al Inicio</Link>
      </p>
    </div>
  );
}

export default NotFound;