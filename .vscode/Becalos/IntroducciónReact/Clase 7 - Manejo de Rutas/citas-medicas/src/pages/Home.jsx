import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-container">
      <h2>Bienvenido al Gestor de Citas Médicas</h2>
      <p>Aquí podrás ver y gestionar tus citas fácilmente.</p>
      <p>
        <Link to="/citas" className="button-link">Ver mis Citas Ahora</Link>
      </p>
    </div>
  );
}

export default Home;