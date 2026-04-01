import React from 'react';
import '../styles/ingredients.css';
import IngredientButton from './IngredientButton.jsx';
import IngredientsData from '../data/ingredients.json';
import ClearIngredientsButton from './ClearIngredientsButton.jsx';
import { categoryMap, inversionList, filterMap } from '../utils/constants.js';

export default function Ingredients(props) {
  return (
    <div className="card ingredientClass">
      <h2 className="text-center">Choose Your Ingredients</h2>

      {props.Categories.map((Category) => (
        <div key={Category} className="categoryContainer">
          <h3 className="categoryHeader text-center">{Category}</h3>

          <div className="ingredientButtons">
            {IngredientsData
              .filter((ingredient) => ingredient.category === categoryMap[Category])
              .map((ingredient) => {
                const disabled = props.selectedFilters.some((filter) => {
                  const property = filterMap[filter];
                  const isInverted = inversionList.includes(filter);
                  return isInverted
                    ? ingredient[property] === true
                    : ingredient[property] === false;
                });

                const isSelected = props.selectedIngredients.some(
                  (item) => item.name === ingredient.name
                );

                return (
                  <IngredientButton
                    key={ingredient.name}
                    ingredient={ingredient}
                    onToggleIngredient={props.onToggleIngredient}
                    isSelected={isSelected}
                    disabled={disabled}
                  />
                );
              })}
          </div>
        </div>
      ))}
      <ClearIngredientsButton 
      clearIngredients={props.clearIngredients}
      selectedIngredients={props.selectedIngredients}/>
    </div>
  );
}