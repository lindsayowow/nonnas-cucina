import { useState } from "react";

export default function useDishBuilder() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [yourOrder, setYourOrder] = useState([]);
  const [showNonnaWarning, setShowNonnaWarning] = useState(false);
  // const [nonnaWarning, setNonnaWarning] = useState(false);        // future use

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

  function getNextDishId() {
    if (yourOrder.length === 0) return 1;
    return yourOrder[yourOrder.length - 1].id + 1;
  }

  function updateOrder() {
    const newDish = {
      id: getNextDishId(),
      ingredients: selectedIngredients,
      totalCost: totalPrice
    };

    setYourOrder(prev => [...prev, newDish]);
    setSelectedIngredients([]);
    return newDish;
  }

  const total = yourOrder.reduce((sum, item) => {
    return sum + (item.totalCost || 0);
  }, 0);

  const grandTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(total);

  function sendToKitchen() {
    setYourOrder([]);
    setSelectedIngredients([]);
    setSelectedFilters([]);
  }

  function clearFilter() {
    setSelectedFilters([]);
  }

  function clearIngredients() {
    setSelectedIngredients([]);
  }

  function removeIngredient(ingredient) {
    setSelectedIngredients(prev =>
      prev.filter(item => item.name !== ingredient.name)
    );
  }

  function removeDish(dish) {
    setYourOrder(prev =>
      prev.filter(item => item.id !== dish.id)
    );
  }

  function addDishAndReset() {
  const newDish = updateOrder();
  clearIngredients();
  clearFilter();
  return newDish;
}

  // Function for future use

  // function triggerNonnaWarning() {
  //   setNonnaWarning(true);
  //   setShowNonnaWarning(true);
  //   setTimeout(() => {
  //     setNonnaWarning(false);
  //     setShowNonnaWarning(false);
  //   }, 1200);
  // }

  return {
    selectedFilters,
    selectedCategory,
    selectedIngredients,
    totalPrice,
    yourOrder,
    grandTotal,
    showNonnaWarning,
    // nonnaWarning, // future use
    toggleFilter,
    toggleIngredient,
    setSelectedCategory,
    setSelectedIngredients,
    setSelectedFilters,
    setYourOrder,
    updateOrder,
    sendToKitchen,
    clearFilter,
    clearIngredients,
    removeIngredient,
    removeDish,
    //  triggerNonnaWarning, // future use
    setShowNonnaWarning,
    addDishAndReset
  };
}
