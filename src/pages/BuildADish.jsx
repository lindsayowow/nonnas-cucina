import { useState } from 'react';
import '../styles/BuildADish.css';
import NonnaReaction from '../components/NonnaReaction.jsx';
import Filters from '../components/Filters.jsx';
import Ingredients from '../components/Ingredients.jsx';
import Dish from '../components/Dish.jsx';
import Order from '../components/Order.jsx';
import IngredientButton from '../components/IngredientButton.jsx';
import FilterButton from '../components/FilterButton.jsx';

const DietaryFilters = ["🌾Gluten-Free", "🥛 Lactose-Free", "🥜 Nut-Free", "🦐 Shellfish Free", 
  "🥚 Egg-Free", "🫘 Soy-Free", "🧂 Low-Sodium", "🩺 Diabetic-Friendly", "❤️ Heart-Healthy",
   "🫘 Kidney-Friendly", "🪶 Low-FODMAP", "🌱 Vegan", "✡️ Kosher", "☪️ Halal", "👶 Kid-Friendly", "🌶️ Spice Sensitivity",
    "🫧 Texture-Based"]

export default function BuildADish() {
const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <div className="build-container">
      <div className="section-1">
        <h2>Verify your Selections</h2>
        <NonnaReaction />
        <Dish />
      </div>
      <div className="section-2">
        <Filters DietaryFilters={DietaryFilters} onSelectedFilter={setSelectedFilter}/>
        <Ingredients selectedFilter={selectedFilter}/>
      </div>
      <div className="section-3">
        <Order />
      </div>
    </div>
  )
}
