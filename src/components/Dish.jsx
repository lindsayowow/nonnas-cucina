import React from 'react';
import '../styles/BuildADish.css';
import DishButton from './DishButton.jsx';

export default function Dish({ selectedIngredients, totalPrice }) {
    return (
        <div key="dish" className="dish">
            <h2>Your Dish</h2>
            <DishButton>Add to Order button - give this functionality</DishButton>

            {selectedIngredients.length === 0 ? (
                <div className="empty">
                    <p className="dishEmoji">🍽️</p>
                    <p>Your dish is empty.</p></div>
            ) : (
                <ul>
                    {selectedIngredients.map(ingredient => (
                        <li key={ingredient.name}>
                            {ingredient.emoji} {ingredient.name} - {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD"
                            }).format(ingredient.price)}
                        </li>
                    ))}

                    <p>Order total: {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD"
                            }).format(totalPrice)}</p>
                </ul>
            )}
        </div>
    );
}