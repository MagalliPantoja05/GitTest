import React from 'react';
import { useChat } from '../context/ChatContext.jsx';

const History = () => {
  const { state } = useChat();

  return (
    <div className="flex-grow p-4 overflow-y-auto space-y-4">
      {state.history.length === 0 ? (
        <p className="text-gray-400 text-center">Inicia una conversación...</p>
      ) : (
        state.history.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-3 rounded-xl max-w-xs md:max-w-md lg:max-w-lg ${
                message.isUser
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default History;