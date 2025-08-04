 import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-4">
      <p className="text-gray-700 dark:text-gray-300">Tema actual: <span className="font-bold">{theme}</span></p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors duration-200"
      >
        Cambiar Tema
      </button>
    </div>
  );
};

export default ThemeSwitcher;
