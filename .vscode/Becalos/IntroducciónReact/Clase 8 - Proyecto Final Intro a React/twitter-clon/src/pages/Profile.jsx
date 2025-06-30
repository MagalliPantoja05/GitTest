import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {
  if (!user) {
    return (
      <div className="page-container">
        <h1>Error: No autenticado</h1>
        <p>No tienes acceso a esta página sin iniciar sesión.</p>
        <Link to="/login">Ir a Iniciar Sesión</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Perfil de Usuario</h1>
      <p>Bienvenido, **{user.username}**!</p>
      <p>Aquí podrías mostrar información detallada del perfil del usuario.</p>
      <ul>
        <li>Nombre de usuario: {user.username}</li>
        <li>Tweets publicados: (implementar contador)</li>
        <li>Seguidores: (implementar contador)</li>
      </ul>
      <Link to="/" className="button-link">Volver a la Línea de Tiempo</Link>
    </div>
  );
};

export default Profile;