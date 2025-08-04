import React from 'react';
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useTheme } from './context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="p-8 rounded-xl shadow-lg transition-colors duration-500 max-w-md w-full" style={{ backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff' }}>
        <h1 className="text-3xl font-extrabold mb-4">Gestión de Estado con useContext</h1>
        <p className="text-lg mb-6">Este es un ejemplo para demostrar cómo se puede compartir estado globalmente sin pasar props manualmente.</p>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
