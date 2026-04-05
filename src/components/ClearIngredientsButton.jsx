import React from 'react';

export default function ClearIngredientsButton({
  clearIngredients,
  selectedIngredients,
  className = ''
}) {
  return (
    <button
      className={className}
      onClick={clearIngredients}
      disabled={selectedIngredients.length === 0}
    >
      Clear All Ingredients
    </button>
  );
}