import '../styles/build-a-dish.css';
import NonnaReaction from '../components/NonnaReaction.jsx';
import Filters from '../components/Filters.jsx';
import Ingredients from '../components/Ingredients.jsx';
import Dish from '../components/Dish.jsx';
import { DietaryFilters, Categories } from '../utils/constants.js';
import useDishBuilder from "../hooks/useDishBuilder";

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
    removeIngredient
  } = useDishBuilder();

  return (
    <div className="build-container">
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
        />
      </div>

      <div className="section-2">
        <div className="dish-container">
          <Dish
            selectedIngredients={selectedIngredients}
            totalPrice={totalPrice}
            updateOrder={updateOrder}
            removeIngredient={removeIngredient}
          />
        </div>
        <div className="nonna-container">
          <NonnaReaction />
        </div>
      </div>
    </div>
  );
}
