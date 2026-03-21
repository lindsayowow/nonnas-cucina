import { useState } from 'react';
import '../styles/BuildADish.css';
import NonnaReaction from '../components/NonnaReaction.jsx';
import Filters from '../components/Filters.jsx';
import Ingredients from '../components/Ingredients.jsx';
import Dish from '../components/Dish.jsx';
import Order from '../components/Order.jsx';
import { DietaryFilters, Categories } from '../utils/constants.js';

export default function BuildADish() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  function toggleFilter(filter) {
  setSelectedFilters(prev =>
    prev.includes(filter)
      ? prev.filter(f => f !== filter)
      : [...prev, filter]
  );
}

  function toggleIngredient(ingredient) {
  setSelectedFilters(prev =>
    prev.includes(ingredient)
      ? prev.ingredient(f => f !== ingredient)
      : [...prev, ingredient]
  );
}
  return (
    <div key="build-container" className="build-container">
      <div className="section-1">
        <NonnaReaction />
        <Dish />
      </div>
      <div className="section-2">
        <Filters
          DietaryFilters={DietaryFilters}
          onSelectedFilters={setSelectedFilters}
          onToggleFilter={toggleFilter}
          selectedFilters={selectedFilters}
        />

        <Ingredients
          selectedFilters={selectedFilters}
          selectedIngredient={selectedIngredients}
          onSelectedIngredient={setSelectedIngredients}
          selectedCategory={selectedCategory}
          Categories={Categories}
          onSelectedCategory={setSelectedCategory}
          onToggleIngredient={toggleIngredient}
        />
      </div>

      <div className="section-3">
        <Order />
      </div>
    </div>
  )
}
