import React from 'react';
import '../styles/BuildADish.css';


export default function IngredientButton({ emoji, name, disabled, isSelected, onToggleIngredient }) {
  return (
    <button className={`IngredientButton 
            ${disabled ? "disabled" : ""} 
            ${isSelected ? "selected" : ""}`}
            onClick={() => onToggleIngredient(name)} 
    disabled={disabled}><span className="emoji">{emoji}</span> {name}
    
    </button>
  );
}