import React, { useRef } from 'react';
import '../styles/build-a-dish.css';

import NonnaReaction from '../components/NonnaReaction.jsx';
import Filters from '../components/Filters.jsx';
import Ingredients from '../components/Ingredients.jsx';
import Dish from '../components/Dish.jsx';

import { DietaryFilters, Categories } from '../utils/constants.js';
import { useDishBuilderContext } from "../context/DishBuilderContext";

export default function BuildADish() {
  const {
    selectedFilters,
    selectedCategory,
    selectedIngredients,
    totalPrice,
    toggleFilter,
    toggleIngredient,
    setSelectedCategory,
    setSelectedIngredients,
    updateOrder,
    clearFilter,
    clearIngredients,
    removeIngredient,
    yourOrder,
    triggerNonnaWarning,
    addDishAAndReset
  } = useDishBuilderContext();

  const filtersRef = useRef(null);

  return (
    <div className="build-container">

      {/* DESKTOP NONNA */}
      <div className="section-0 desktop-only">
        <div className="nonna-container">
          <NonnaReaction />
        </div>
      </div>

      {/* FILTERS + INGREDIENTS */}
      <div className="section-1">
        <div ref={filtersRef}>
          <Filters
            DietaryFilters={DietaryFilters}
            selectedFilters={selectedFilters}
            onToggleFilter={toggleFilter}
            clearFilter={clearFilter}
          />
        </div>

        <Ingredients
          selectedFilters={selectedFilters}
          selectedIngredients={selectedIngredients}
          onSelectedIngredient={setSelectedIngredients}
          selectedCategory={selectedCategory}
          Categories={Categories}
          onSelectedCategory={setSelectedCategory}
          onToggleIngredient={toggleIngredient}
          clearIngredients={clearIngredients}
          updateOrder={updateOrder}
          triggerNonnaWarning={triggerNonnaWarning}
          resetFilters={clearFilter}
          yourOrder={yourOrder}
          scrollToRef={filtersRef}
        />
      </div>

      {/* DISH */}
      <div className="section-2">
        <div className="dish-container">
          <Dish
            selectedIngredients={selectedIngredients}
            totalPrice={totalPrice}
            updateOrder={updateOrder}
            removeIngredient={removeIngredient}
            yourOrder={yourOrder}
            addDishAAndReset={addDishAAndReset}
          />
        </div>

        {/* MOBILE NONNA */}
        <div className="mobile-only mobile-nonna">
          <NonnaReaction />
        </div>
      </div>

    </div>
  );
}
