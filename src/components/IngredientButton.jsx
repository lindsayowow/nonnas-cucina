import React from 'react';

export default function IngredientButton({
  disabled,
  isSelected,
  onToggleIngredient,
  ingredient,
  triggerNonnaWarning
}) {
  const handleClick = () => {
    console.log('IngredientButton clicked. disabled =', disabled);

    if (disabled) {
      console.log('Triggering Nonna warning');
      triggerNonnaWarning && triggerNonnaWarning();
      return;
    }

    console.log('Toggling ingredient');
    onToggleIngredient(ingredient);
  };

  return (
    <button
      className={`btn IngredientButton 
        ${disabled ? "is-disabled" : ""} 
        ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <span className="emoji">{ingredient.emoji}</span> {ingredient.name}
    </button>
  );
}