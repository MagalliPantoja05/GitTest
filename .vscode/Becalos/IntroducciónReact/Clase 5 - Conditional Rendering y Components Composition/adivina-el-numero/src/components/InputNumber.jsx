import React from 'react';

function InputNumber({ value, onChange }) {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder="Ingresa tu número"
      min="1"
      max="100"
      aria-label="Número a adivinar"
    />
  );
}

export default InputNumber;