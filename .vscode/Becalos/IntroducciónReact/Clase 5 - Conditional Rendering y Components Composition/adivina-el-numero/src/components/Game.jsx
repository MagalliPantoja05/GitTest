import React, { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

const generarNumeroSecreto = () => Math.floor(Math.random() * 100) + 1;

function Game() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroSecreto());
  const [numeroJugador, setNumeroJugador] = useState('');
  const [mensaje, setMensaje] = useState('La computadora ha generado un número entre 1 y 100. ¡Adivínalo!');
  const [intentos, setIntentos] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [claseMensaje, setClaseMensaje] = useState('');

  const handleAdivinar = () => {
    const numeroIngresado = parseInt(numeroJugador);
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
      setMensaje('Por favor, ingresa un número válido entre 1 y 100.');
      setClaseMensaje('');
      return;
    }

    setIntentos(prevIntentos => prevIntentos + 1);
    if (numeroIngresado === numeroSecreto) {
      setMensaje(`¡Felicidades! ¡Adivinaste el número en ${intentos + 1} intentos!`);
      setClaseMensaje('correct');
      setJuegoTerminado(true);
    } else if (numeroIngresado < numeroSecreto) {
      setMensaje('El número es más alto.');
      setClaseMensaje('hint');
    } else {
      setMensaje('El número es más bajo.');
      setClaseMensaje('hint');
    }
  };

  const handleReiniciar = () => {
    setNumeroSecreto(generarNumeroSecreto());
    setNumeroJugador('');
    setMensaje('La computadora ha generado un número entre 1 y 100. ¡Adivínalo!');
    setIntentos(0);
    setJuegoTerminado(false);
    setClaseMensaje('');
  };

  return (
    <div className="game-container">
      <h1>Adivina el Número</h1>
      <p>Intento: {intentos}</p>

      <InputNumber
        value={numeroJugador}
        onChange={(e) => setNumeroJugador(e.target.value)}
        disabled={juegoTerminado}
      />

      {!juegoTerminado && (
        <button onClick={handleAdivinar}>Adivinar</button>
      )}

      <Message text={mensaje} className={claseMensaje} />

      {(juegoTerminado || intentos > 0) && (
        <RestartButton onClick={handleReiniciar} />
      )}
    </div>
  );
}

export default Game;