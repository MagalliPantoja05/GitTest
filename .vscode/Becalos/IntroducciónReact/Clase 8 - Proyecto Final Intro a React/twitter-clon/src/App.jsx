import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom"; 
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("twitterAuthUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error al cargar el usuario desde localStorage:", error);
      localStorage.removeItem("twitterAuthUser");
    }
  }, []);

  const login = (username) => {
    const userData = { username };
    setUser(userData);
    try {
      localStorage.setItem("twitterAuthUser", JSON.stringify(userData));
      console.log("Usuario logueado y guardado en localStorage:", userData.username);
    } catch (error) {
      console.error("Error al guardar el usuario en localStorage:", error);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("twitterAuthUser");
      console.log("Sesión cerrada y usuario eliminado de localStorage.");
    } catch (error) {
      console.error("Error al eliminar el usuario de localStorage:", error);
    }
  };

  return (
    <div>
      <nav className="main-nav">
        <Link to="/">Inicio</Link>
        {user ? (
          <>
            <Link to="/profile">Mi Perfil ({user.username})</Link>
            <button onClick={logout} className="logout-button">Cerrar Sesión</button>
          </>
        ) : (
          <Link to="/login">Iniciar Sesión</Link>
        )}
      </nav>

      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home user={user} logout={logout} />} />
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;
