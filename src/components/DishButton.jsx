import React from 'react';

export default function DishButton({
  onClick,
  children,
  className = '',
  disabled = false
}) {
  return (
    <button
      className={`btn ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}