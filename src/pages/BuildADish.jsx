import '../styles/build-a-dish.css';
import NonnaReaction from '../components/NonnaReaction.jsx';
import Filters from '../components/Filters.jsx';
import Ingredients from '../components/Ingredients.jsx';
import Dish from '../components/Dish.jsx';
import Order from '../components/Order.jsx';
import { DietaryFilters, Categories } from '../utils/constants.js';
import useDishBuilder from "../hooks/useDishBuilder";

export default function BuildADish() {
  const {
    selectedFilters,
    selectedCategory,
    selectedIngredients,
    totalPrice,
    yourOrder,
    grandTotal,
    toggleFilter,
    toggleIngredient,
    setSelectedCategory,
    setSelectedIngredients,
    updateOrder,
    sendToKitchen,
    clearFilter,
    clearIngredients,
    removeIngredient,
    removeDish
  } = useDishBuilder();

  return (
    <div className="build-container">
      <div className="section-1">
        <div className="nonna-container">
          <NonnaReaction />
        </div>
      </div>

      <div className="section-2">
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

      <div className="section-3">
        <div className="dish-container">
          <Dish
            selectedIngredients={selectedIngredients}
            totalPrice={totalPrice}
            updateOrder={updateOrder}
            removeIngredient={removeIngredient}
          />
        </div>
        <Order
          yourOrder={yourOrder}
          sendToKitchen={sendToKitchen}
          grandTotal={grandTotal}
          removeDish={removeDish}
        />
      </div>
    </div>
  );
}
