import React, { useState } from 'react';
import { ChatProvider, useChat } from './context/ChatContext.jsx';
import { useOllamaApi } from './hooks/useOllamaHook.js';
import History from './components/History.jsx';

function AppContent() {
  const [input, setInput] = useState('');
  const { state, dispatch } = useChat();
  const { sendMessage, loading } = useOllamaApi();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    dispatch({ type: 'ADD_MESSAGE', payload: { text: input, isUser: true } });
    setInput('');
    dispatch({ type: 'SET_LOADING', payload: true });

    const response = await sendMessage(input);
    if (response) {
      dispatch({ type: 'ADD_MESSAGE', payload: { text: response, isUser: false } });
    }
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">
      <History />
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <form onSubmit={handleSend} className="flex space-x-2">
          <input
            type="text"
            className="flex-grow p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ChatProvider>
      <AppContent />
    </ChatProvider>
  );
}