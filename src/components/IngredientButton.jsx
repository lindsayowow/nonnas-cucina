import React from 'react';

export default function IngredientButton({
  disabled,
  isSelected,
  onToggleIngredient,
  ingredient,
  triggerNonnaWarning
}) {
  const handleClick = () => {
    if (disabled) {
      // Fire Nonna’s temporary warning
      triggerNonnaWarning && triggerNonnaWarning();
      return;
    }

    // Normal behavior
    onToggleIngredient(ingredient);
  };

  return (
<button
  className={`btn IngredientButton 
    ${disabled ? "disabled" : ""} 
    ${isSelected ? "selected" : ""}`}
  onClick={handleClick}
  disabled={disabled}
>
      <span className="emoji">{ingredient.emoji}</span> {ingredient.name}
    </button>
  );
}