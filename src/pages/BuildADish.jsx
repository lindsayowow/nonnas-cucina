import '../styles/BuildADish.css';
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
    sendToKitchen
  } = useDishBuilder();

  return (
    <div className="build-container">
      <div className="section-1">
        <NonnaReaction />

        <Dish
          selectedIngredients={selectedIngredients}
          totalPrice={totalPrice}
          updateOrder={updateOrder}
        />
      </div>

      <div className="section-2">
        <Filters
          DietaryFilters={DietaryFilters}
          selectedFilters={selectedFilters}
          onToggleFilter={toggleFilter}
        />

        <Ingredients
          selectedFilters={selectedFilters}
          selectedIngredients={selectedIngredients}
          onSelectedIngredient={setSelectedIngredients}
          selectedCategory={selectedCategory}
          Categories={Categories}
          onSelectedCategory={setSelectedCategory}
          onToggleIngredient={toggleIngredient}
        />
      </div>

      <div className="section-3">
        <Order
          yourOrder={yourOrder}
          sendToKitchen={sendToKitchen}
          grandTotal={grandTotal}
        />
      </div>
    </div>
  );
}