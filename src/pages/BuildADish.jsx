import { useState } from 'react';
import '../styles/BuildADish.css';
import NonnaReaction from '../components/NonnaReaction.jsx';
import Filters from '../components/Filters.jsx';
import Ingredients from '../components/Ingredients.jsx';
import Dish from '../components/Dish.jsx';
import Order from '../components/Order.jsx';
import { DietaryFilters, Categories } from '../utils/constants.js';

export default function BuildADish() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");

  return (
    <div className="build-container">
      <div className="section-1">
        {/* <h2>Verify your Selections</h2> */}
        <NonnaReaction />
        <Dish />
      </div>
      <div className="section-2">
        <Filters
          DietaryFilters={DietaryFilters}
          onSelectedFilter={setSelectedFilter}
        />

        <Ingredients
          selectedFilter={selectedFilter}
          selectedIngredient={selectedIngredient}
          onSelectedIngredient={setSelectedIngredient}
          selectedCategory={selectedCategory}
          Categories={Categories}
          onSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="section-3">
        <Order />
      </div>
    </div>
  )
}
