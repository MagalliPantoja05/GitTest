import React, { useReducer, useRef, useEffect, useCallback, useState } from "react";

const getInitialState = () => {
  try {
    const storedState = localStorage.getItem('contadorGameState');
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      return {
        count: parsedState.count || 0,
        history: parsedState.history || [],
        pastCounts: parsedState.pastCounts || [],
      };
    }
  } catch (error) {
    console.error("Error al cargar el estado desde localStorage:", error);
  }
  return { count: 0, history: [], pastCounts: [] };
};

const initialState = getInitialState();

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        pastCounts: [...state.pastCounts, state.count],
        count: state.count + 1,
        history: [...state.history, `+1 (Nuevo valor: ${state.count + 1})`]
      };
    case "decrement":
      return {
        pastCounts: [...state.pastCounts, state.count],
        count: state.count - 1,
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`]
      };
    case "incrementBy":
      const valueToAdd = typeof action.value === 'number' ? action.value : parseInt(action.value || '0');
      if (isNaN(valueToAdd)) return state;

      return {
        pastCounts: [...state.pastCounts, state.count],
        count: state.count + valueToAdd,
        history: [...state.history, `+${valueToAdd} (Nuevo valor: ${state.count + valueToAdd})`]
      };
    case "undo":
      if (state.pastCounts.length > 0) {
        const previousCount = state.pastCounts[state.pastCounts.length - 1];
        const newPastCounts = state.pastCounts.slice(0, -1);
        const newHistory = state.history.slice(0, -1);

        return {
          count: previousCount,
          history: newHistory,
          pastCounts: newPastCounts,
        };
      }
      return state;
    case "reset":
      return { count: 0, history: [], pastCounts: [] };
    default:
      return state;
  }
}

function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);
  const [incrementAmount, setIncrementAmount] = useState('');

  useEffect(() => {
    if (incrementBtnRef.current) {
      incrementBtnRef.current.focus();
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('contadorGameState', JSON.stringify(state));
      console.log("Estado del contador guardado en localStorage.");
    } catch (error) {
      console.error("Error al guardar el estado en localStorage:", error);
    }
  }, [state]);

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
    setIncrementAmount('');
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
    setIncrementAmount('');
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
    setIncrementAmount('');
  }, []);

  const handleUndo = useCallback(() => {
    dispatch({ type: "undo" });
    setIncrementAmount('');
  }, []);

  const handleIncrementBy = useCallback(() => {
    if (incrementAmount.trim() !== '' && !isNaN(parseInt(incrementAmount))) {
      dispatch({ type: "incrementBy", value: parseInt(incrementAmount) });
      setIncrementAmount('');
    } else {
      alert("Por favor, ingresa un número válido para incrementar.");
    }
  }, [incrementAmount]);

  return (
    <div className="game-container">
      <h2>Contador: {state.count}</h2>
      <div className="controls-group">
        <button ref={incrementBtnRef} onClick={handleIncrement} className="btn-increment">
          +1
        </button>
        <button onClick={handleDecrement} className="btn-decrement">
          -1
        </button>
        <button onClick={handleReset} className="btn-reset">
          Reset
        </button>
        <button onClick={handleUndo} className="btn-undo" disabled={state.pastCounts.length === 0}>
          Deshacer
        </button>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          placeholder="Valor"
          aria-label="Incrementar por"
        />
        <button onClick={handleIncrementBy} className="btn-increment-by">
          Incrementar por
        </button>
      </div>

      <h3>Historial de cambios:</h3>
      {state.history.length === 0 ? (
        <p>No hay historial todavía.</p>
      ) : (
        <ul>
          {state.history.slice().reverse().map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CounterGame;