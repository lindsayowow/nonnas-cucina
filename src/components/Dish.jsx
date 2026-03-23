import React from 'react';
import '../styles/BuildADish.css';

export default function Dish(ingredient) {
    return (
        <div className="dish">
            <h3>Your Dish</h3>
            <p>Add to Order button - moves list to Your Order as 1 array with ingredient objects</p>
            <ul>
                selectedIngredients.map((emoji, name)
                    <li>{ingredient.emoji} {ingredient.name}</li>
                )
            </ul>
        </div>
    )
}
