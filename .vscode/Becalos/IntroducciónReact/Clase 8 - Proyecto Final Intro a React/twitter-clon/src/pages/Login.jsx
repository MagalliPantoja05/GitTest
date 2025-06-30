import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username.trim()) {
        onLogin(username);
        navigate("/");
    } else {
        alert("Por favor, ingresa un nombre de usuario.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Nombre de usuario"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;