import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/dish.css';
import DishButton from './DishButton.jsx';
import RemoveIngredientButton from './RemoveIngredientButton.jsx';

export default function Dish({
  selectedIngredients,
  totalPrice,
  updateOrder,
  removeIngredient,
  yourOrder
}) {
  const cartCount = yourOrder?.length || 0;

  return (
    <div className="card dish">
      <h2 className="text-center">Your Dish</h2>

      {selectedIngredients.length === 0 ? (
        <div className="empty text-center">
          <p className="dishEmoji">🍽️</p>
          <p>Your current dish is empty.</p>

          <Link to="/cart">
            <DishButton>
              Go to Cart 🛒 ({cartCount})
            </DishButton>
          </Link>
        </div>
      ) : (
        <div>
          <ul className="activeIngredientsSelected">
            {selectedIngredients.map((ingredient) => (
              <li key={ingredient.name}>
                <span className="ingredientText">
                  <span className="ingredientEmoji">{ingredient.emoji}</span>
                  {ingredient.name} –{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                  }).format(ingredient.price)}
                </span>

                <RemoveIngredientButton
                  ingredient={ingredient}
                  onRemove={removeIngredient}
                />
              </li>

            ))}
          </ul>

          <p className="dishTotal text-bold text-center">
            Order total:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(totalPrice)}
          </p>

          <DishButton
            onClick={updateOrder}
            disabled={selectedIngredients.length === 0}
          >
            Add to Order
          </DishButton>

          <Link to="/cart">
            <DishButton>
              Go to Cart 🛒 ({cartCount})
            </DishButton>
          </Link>
        </div>
      )}
    </div>
  );
}
