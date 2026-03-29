import React from 'react';

export default function IngredientButton({ disabled, isSelected, onToggleIngredient, ingredient }) {
  return (
    <button
      className={`btn IngredientButton 
        ${disabled ? "disabled" : ""} 
        ${isSelected ? "selected" : ""}`}
      onClick={() => onToggleIngredient(ingredient)}
      disabled={disabled}
    >
      <span className="emoji">{ingredient.emoji}</span> {ingredient.name}
    </button>
  );
}