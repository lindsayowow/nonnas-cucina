import React from 'react';

export default function DishButton({ onClick, children }) {
  return (
    <button
      className="btn DishButton"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
