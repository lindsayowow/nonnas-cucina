import React from 'react';
import '../styles/BuildADish.css';


export default function IngredientButton({ emoji, name, disabled }) {
  return (
    <button className="IngredientButton" 
    disabled={disabled}><span className="emoji">{emoji}</span> {name}</button>
  );
}