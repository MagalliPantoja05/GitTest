import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './index.css';

// Validación con Zod
const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'El nombre de usuario debe tener al menos 3 caracteres.' })
    .max(20, { message: 'El nombre de usuario no debe exceder los 20 caracteres.' })
    .regex(/^[a-zA-Z0-9_]+$/, { message: 'Solo letras, números y guiones bajos.' }),
  email: z
    .string()
    .email({ message: 'Formato de correo electrónico inválido.' })
    .min(1, { message: 'El correo electrónico es obligatorio.' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
    .max(50, { message: 'La contraseña es demasiado larga.' }),
});

// Componente principal de la aplicación
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
    alert(`¡Formulario enviado con éxito!\nUsuario: ${data.username}\nEmail: ${data.email}`);
    reset();
  };

  return (
  // Contenedor principal
  <div className="min-h-screen flex items-center justify-center bg-slate-900 text-gray-100 p-4 font-montserrat">
    {/* Contenedor del formulario */}
    <div className="animate-fade-in bg-slate-800 p-10 rounded-xl shadow-2xl w-full max-w-lg">
      <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wide">
        Formulario de Registro
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-300 text-left mb-2"
          >
            Nombre de Usuario
          </label>
          <input
            type="text"
            id="username"
            placeholder="Tu nombre de usuario"
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.username ? 'border-red-500' : 'border-slate-600'
            } bg-slate-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200`}
            {...register('username')}
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-400 text-left">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Campo de Correo Electrónico */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 text-left mb-2"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="tu@ejemplo.com"
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.email ? 'border-red-500' : 'border-slate-600'
            } bg-slate-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200`}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400 text-left">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Campo de Contraseña */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 text-left mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Mínimo 6 caracteres"
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.password ? 'border-red-500' : 'border-slate-600'
            } bg-slate-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200`}
            {...register('password')}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-400 text-left">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
        >
          Registrarse
        </button>
        </form>
      </div>
    </div>
  );
}
