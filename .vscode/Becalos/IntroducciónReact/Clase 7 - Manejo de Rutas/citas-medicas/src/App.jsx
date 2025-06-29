import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Citas from './pages/Citas';
import CitaDetalle from './pages/CitaDetalle';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/citas">Ver Citas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cita/:id" element={<CitaDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;