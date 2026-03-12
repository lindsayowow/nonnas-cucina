import React from 'react';
import '../styles/BuildADish.css';
import NonnaReaction from './NonnaReaction.jsx';
import Filters from './Filters.jsx';
import Ingredients from './Ingredients.jsx';
import Dish from './Dish.jsx';
import Order from './Order.jsx';
import IngredientButton from './IngredientButton.jsx';
import FilterButton from './FilterButton.jsx';

export default function BuildADish() {
  return (
    <div className="build-container">
      <Filters />
      <Ingredients />
      <h2>Step 3: Verify your Selections</h2>
      <NonnaReaction />
      <Dish />
      <Order />
    </div>
  )
}
