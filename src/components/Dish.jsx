import React from 'react';
import '../styles/BuildADish.css';
import DishButton from './DishButton.jsx';

export default function Dish({ selectedIngredients, totalPrice, updateOrder }) {
    return (
        <div key="dish" className="dish">
            <h2>Your Dish</h2>

            <DishButton onClick={updateOrder}>Add to Order</DishButton>

            {selectedIngredients.length === 0 ? (
                <div className="empty">
                    <p className="dishEmoji">🍽️</p>
                    <p>Your dish is empty.</p></div>
            ) : (<div>
                <ul className="activeIngredientsSelected">
                    {selectedIngredients.map(ingredient => (
                        <li key={ingredient.name}>
                            {ingredient.emoji} {ingredient.name} - {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD"
                            }).format(ingredient.price)}
                        </li>
                    ))}
                </ul>
                <p className="dishTotal">Order total: {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(totalPrice)}</p></div>
            )}
        </div>
    );
}