import React from 'react';
import '../styles/BuildADish.css';


export default function IngredientButton({ disabled, isSelected, onToggleIngredient, ingredient }) {
  return (
    <button className={`IngredientButton 
            ${disabled ? "disabled" : ""} 
            ${isSelected ? "selected" : ""}`}
      onClick={() => onToggleIngredient(ingredient)}
      disabled={disabled}>
      <span className="emoji">{ingredient.emoji}</span> {ingredient.name}
    </button>
  );
}