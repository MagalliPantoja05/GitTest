import Tarjeta from './Tarjeta';
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <h1>Tarjeta de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta />

      {/* Componente adicional*/}
      <SeccionIntereses />
    </div>
  );
}

function SeccionIntereses() {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      padding: '20px',
      width: '300px',
      textAlign: 'center',
      margin: '20px auto',
      borderRadius: '10px',
      backgroundColor: '#3A6B9B',
      boxShadow: '0 4px 8px #ffffff',
      fontFamily: 'Monserrat, sans-serif',
      color: 'white'
    }}>
      <h3>Mis Intereses</h3>
      <ul>
        <li>Programación Web</li>
        <li>Diseño UX/UI</li>
        <li>Aprendizaje Continuo</li>
      </ul>
    </div>
  );
}

export default App;