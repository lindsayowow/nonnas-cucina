import React from 'react'

export default function ClearIngredientsButton(props) {
  return (
        <div className="clearAllIngredients">
            <button
                className="clearAllIngredientButton"
                onClick={props.clearIngredients}
                disabled={props.selectedIngredients.length === 0}>
                Clear All Ingredients
            </button>
        </div>
  )
}
