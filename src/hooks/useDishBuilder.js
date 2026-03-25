import { useState } from "react";

export default function useDishBuilder() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [yourOrder, setYourOrder] = useState([]);

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

  const totalPrice = selectedIngredients.reduce(
    (sum, ingredient) => sum + (ingredient.price || 0),
    0
  );

  function updateOrder() {
    const yourDish = {
      id: selectedIngredients.length + 1,
      ingredients: selectedIngredients,
      totalcost: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(totalPrice)
    };
    setYourOrder(prev => [...prev, yourDish]);
  }


  return {
    selectedFilters,
    selectedCategory,
    selectedIngredients,
    toggleFilter,
    toggleIngredient,
    setSelectedCategory,
    setSelectedIngredients,
    setSelectedFilters,
    totalPrice,
    yourOrder,
    setYourOrder
  };
}