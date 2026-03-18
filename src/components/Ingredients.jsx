import React from 'react';
import '../styles/BuildADish.css';
import IngredientButton from './IngredientButton.jsx';
// import IngredientsData from '../data/ingredients.json';

export default function Ingredients(props) {

  return (
    <div className="ingredientClass">
      <h2>Choose Your Ingredients</h2>

      {props.Categories.map((category) => (
        <h3 key={category}>{category}</h3>
      ))}

      <IngredientButton  />
    </div>
  )
}
