import React from 'react';

function Message({ text, className }) {
  return (
    <p className={`game-message ${className}`}>
      {text}
    </p>
  );
}

export default Message;