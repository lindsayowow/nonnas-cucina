import React from 'react';
import '../styles/BuildADish.css';
import IngredientButton from './IngredientButton.jsx';
import IngredientsData from '../data/ingredients.json';
import categoryMap from '../utils/constants.js'

export default function Ingredients(props) {

  return (
    <div className="ingredientClass">
      <h2>Choose Your Ingredients</h2>
      {props.Categories.map((Category) => (
        <div className="categoryContainer">
          <h3 key={Category} className="categoryHeader">{Category}</h3>

          {IngredientsData.filter((ingredient) =>
              ingredient.category === Category)
              .map((ingredient) => (<IngredientButton key={ingredient.name}
                name={ingredient.name} />
              ))}

        </div>
      ))}

    </div>
  );
}
