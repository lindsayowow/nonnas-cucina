import React from 'react';
import '../styles/BuildADish.css';
import IngredientButton from './IngredientButton.jsx';
import IngredientsData from '../data/ingredients.json';

export default function Ingredients(props) {

  return (
    <div className="ingredientClass">
      <h2>Choose Your Ingredients</h2>

      <h3>{props.Categories[0]}</h3>
      <IngredientButton 
        IngredientsData={props.IngredientsData}
        Categories={props.Categories}
        selectedFilter={props.selectedFilter}
        selectedIngredient={props.selectedIngredient}
        onSelectedIngredient={props.onSelectedIngredient}
        selectedCategory={props.selectedCategory}
        onSelectedCategory={props.onSelectedCategory} />
      <h3>{props.Categories[1]}</h3>
      <h3>{props.Categories[2]}</h3>
      <h3>{props.Categories[3]}</h3>
      <h3>{props.Categories[4]}</h3>
    </div>
  )
}
