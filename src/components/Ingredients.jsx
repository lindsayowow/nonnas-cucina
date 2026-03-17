import React from 'react';
import '../styles/Buttons.css';
import IngredientButton from './IngredientButton.jsx';

export default function Ingredients(props) {

  return (
          <div className="ingredientClass">
            <h2>Choose Your Ingredients</h2>

            <h3>{props.Categories[0]}</h3>
            <IngredientButton Categories={props.Categories}/>
            <h3>{props.Categories[1]}</h3>
            <h3>{props.Categories[2]}</h3>
            <h3>{props.Categories[3]}</h3>
            <h3>{props.Categories[4]}</h3>
          </div>
  )
}
