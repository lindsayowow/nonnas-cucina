import React from 'react';
import '../styles/BuildADish.css';
import NonnaReaction from '../components/NonnaReaction.jsx';
import Filters from '../components/Filters.jsx';
import Ingredients from '../components/Ingredients.jsx';
import Dish from '../components/Dish.jsx';
import Order from '../components/Order.jsx';
import IngredientButton from '../components/IngredientButton.jsx';
import FilterButton from '../components/FilterButton.jsx';

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
