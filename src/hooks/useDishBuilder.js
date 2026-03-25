import { useState } from "react";

export default function useDishBuilder() {
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
    setSelectedIngredients(prev =>
      prev.some(item => item.name === ingredient.name)
        ? prev.filter(item => item.name !== ingredient.name)
        : [...prev, ingredient]
    );
  }

  // ⭐ NEW: computed total price
  const totalPrice = selectedIngredients.reduce(
    (sum, ingredient) => sum + (ingredient.price || 0),
    0
  );

  return {
    selectedFilters,
    selectedCategory,
    selectedIngredients,
    toggleFilter,
    toggleIngredient,
    setSelectedCategory,
    setSelectedIngredients,
    setSelectedFilters,
    totalPrice   
  };
}