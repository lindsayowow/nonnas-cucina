import React from 'react';
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
    triggerNonnaWarning
  } = useDishBuilderContext();

  return (
    <div className="build-container">

      {/* DESKTOP NONNA (top-left column) */}
      <div className="section-0 desktop-only">
        <div className="nonna-container">
          <NonnaReaction />
        </div>
      </div>

      {/* FILTERS + INGREDIENTS */}
      <div className="section-1">
        <Filters
          DietaryFilters={DietaryFilters}
          selectedFilters={selectedFilters}
          onToggleFilter={toggleFilter}
          clearFilter={clearFilter}
        />

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
        />
      </div>

      {/* DISH (desktop + mobile) */}
      <div className="section-2">
        <div className="dish-container">
          <Dish
            selectedIngredients={selectedIngredients}
            totalPrice={totalPrice}
            updateOrder={updateOrder}
            removeIngredient={removeIngredient}
            yourOrder={yourOrder}
          />
        </div>

        {/* MOBILE NONNA (below dish) */}
        <div className="mobile-only mobile-nonna">
          <NonnaReaction />
        </div>
      </div>

    </div>
  );
}