import React from 'react';
import '../styles/BuildADish.css';
import IngredientButton from './IngredientButton.jsx';
import IngredientsData from '../data/ingredients.json';
import { categoryMap, inversionList, filterMap } from '../utils/constants.js';

export default function Ingredients(props) {
  return (
    <div className="ingredientClass">
      <h2>Choose Your Ingredients</h2>
      {props.Categories.map((Category) => (
        <div key={Category} className="categoryContainer">
          <h3 className="categoryHeader">{Category}</h3>

          {IngredientsData.filter((ingredient) =>
            ingredient.category === categoryMap[Category])
            .map((ingredient) => (
              <IngredientButton
                key={ingredient.name}
                ingredient={ingredient}
                onToggleIngredient={props.onToggleIngredient}
                isSelected= {props.selectedIngredients.some(item => item.name ===ingredient.name)}
                disabled={props.selectedFilters.some((filter) => {
                  const property = filterMap[filter];
                  const isInverted = inversionList.includes(filter);
                  if (isInverted) {
                    return ingredient[property] === true;
                  } else {
                    return ingredient[property] === false;
                  }
                })} />
            ))}
        </div>
      ))}
    </div>
  );
}
