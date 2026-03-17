import React from 'react';
import '../styles/Buttons.css';
import IngredientButton from './IngredientButton';'./IngredientButton.jsx';

export default function Ingredients(props) {

  return (
          <div className="ingredients">
            <h2>Choose Your Ingredients</h2>
            <IngredientButton Categories={props.Categories}/>
          </div>
  )
}
