import { useState } from 'react';

export function useOllamaApi() {
  const [loading, setLoading] = useState(false);

  const sendMessage = async (prompt) => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'deepseek-r1:1.5b',
          prompt,
          stream: false,
        }),
      });
      const data = await res.json();
      setLoading(false);
      return data.response;
    } catch (error) {
      console.error('Error al generar respuesta:', error);
      setLoading(false);
      return 'Hubo un error al conectar con la IA. Por favor, asegúrate de que Ollama esté corriendo.';
    }
  };

  return { sendMessage, loading };
}