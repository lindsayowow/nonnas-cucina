import React from 'react';

export default function RemoveIngredientButton({ ingredient, onRemove }) {
  return (
    <button
      className="removeIngredientButton"
      onClick={() => onRemove(ingredient)}
      aria-label={`Remove ${ingredient.name}`}
    >
      🗑️
    </button>
  );
}
