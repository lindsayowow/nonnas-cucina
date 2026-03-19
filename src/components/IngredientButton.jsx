import React from 'react';
import '../styles/BuildADish.css';


export default function IngredientButton({ emoji, name }) {
  return (
    <button className="IngredientButton" >{emoji} {name}</button>
  );
}