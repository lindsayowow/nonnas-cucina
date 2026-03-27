import { useState } from "react";

export default function useDishBuilder() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [yourOrder, setYourOrder] = useState([]);

  //  code for future feature to store user's orders in a db
  // const [orderHistory, setOrderHistory] = useState([]);

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
      id: yourOrder.length + 1,
      ingredients: selectedIngredients,
      totalcost: totalPrice
    };
    // Don't forget to remove the console.log here!
    console.log("Here is yourDish:", yourDish, "Here is yourOrder:", yourOrder);
    // Here is your second reminder to remove it later!

    setYourOrder(prev => [...prev, yourDish]);
    setSelectedIngredients([]);
  }

  const total = yourOrder.reduce((sum, item) => {
    return sum + (item.totalcost || 0);
  }, 0);

  const grandTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(total);

  function sendToKitchen() {

    //  code for future feature to store user's orders in a db
    // setOrderHistory(prev => [...prev, ...yourOrder]); 

    setYourOrder([]);
    setSelectedIngredients([]);
  }


  return {
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
    setSelectedFilters,
    setYourOrder,
    updateOrder,
    sendToKitchen
  };
}