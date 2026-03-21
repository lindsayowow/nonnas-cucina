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
                name={ingredient.name}
                emoji={ingredient.emoji}
                disabled={(inversionList.includes(props.selectedFilter) 
                  && ingredient[filterMap[props.selectedFilter]]) 
                  || (!inversionList.includes(props.selectedFilter) 
                  && !(ingredient[filterMap[props.selectedFilter]]))} />
            ))}
        </div>
      ))}
    </div>
  );
}
