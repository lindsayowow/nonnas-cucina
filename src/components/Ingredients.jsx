import React, { useState } from 'react';
import '../styles/ingredients.css';
import IngredientButton from './IngredientButton.jsx';
import IngredientsData from '../data/ingredients.json';
import ClearIngredientsButton from './ClearIngredientsButton.jsx';
import DishButton from "./DishButton.jsx";
import { categoryMap, inversionList, filterMap } from '../utils/constants.js';

export default function Ingredients(props) {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const handleAddToOrder = () => {
    const newDish = props.updateOrder();

    if (newDish) {
      setFadeOut(false);
      setConfirmationMessage(
        `Dish #${newDish.id} has been added to your order. You now have ${props.yourOrder.length} items in your cart.`
      );

      setTimeout(() => setFadeOut(true), 2500);
      setTimeout(() => setConfirmationMessage(""), 3500);
    }

    props.clearIngredients();
    props.resetFilters && props.resetFilters();

    // ⭐ Scroll to Filters component
    if (props.scrollToRef?.current) {
      props.scrollToRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="card ingredientClass">
      <h2 className="text-center">Choose Your Ingredients</h2>

      {props.Categories.map((Category) => (
        <div key={Category} className="categoryContainer">
          <h3 className="categoryHeader text-center">{Category}</h3>

          <div className="ingredientButtons">
            {IngredientsData
              .filter((ingredient) => ingredient.category === categoryMap[Category])
              .map((ingredient) => {
                const disabled = props.selectedFilters.some((filter) => {
                  const property = filterMap[filter];
                  const isInverted = inversionList.includes(filter);
                  return isInverted
                    ? ingredient[property] === true
                    : ingredient[property] === false;
                });

                const isSelected = props.selectedIngredients.some(
                  (item) => item.name === ingredient.name
                );

                return (
                  <IngredientButton
                    key={ingredient.name}
                    ingredient={ingredient}
                    onToggleIngredient={props.onToggleIngredient}
                    isSelected={isSelected}
                    disabled={disabled}
                    triggerNonnaWarning={props.triggerNonnaWarning}
                  />
                );
              })}
          </div>
        </div>
      ))}

      <div className="ingredient-actions">
        <DishButton
          className="build-action-button"
          onClick={handleAddToOrder}
          disabled={props.selectedIngredients.length === 0}
        >
          Add to Order
        </DishButton>

        <ClearIngredientsButton
          className="btn build-action-button"
          clearIngredients={props.clearIngredients}
          selectedIngredients={props.selectedIngredients}
        />
      </div>

      {confirmationMessage && (
        <div className={`confirmation-message ${fadeOut ? "fade-out" : ""}`}>
          {confirmationMessage}
        </div>
      )}
    </div>
  );
}