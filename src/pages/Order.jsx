import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/order.css';
import OrderButton from '../components/OrderButton';
import RemoveDishButton from '../components/RemoveDishButton';
import DishButton from '../components/DishButton';
import { useDishBuilderContext } from "../context/DishBuilderContext";

export default function Order() {
  const {
    sendToKitchen,
    removeDish,
    yourOrder,
    grandTotal
  } = useDishBuilderContext();

  return (
    <div className="order-page">
      <div className="card order">
        <h2 className="text-center">Your Order</h2>

        {yourOrder.length === 0 ? (
          <div className="emptyOrder text-center">
            <p className="clipboardEmoji">📋</p>
            <p>Your order is empty.</p>
          </div>
        ) : (
          <div>
            <ul className="activeOrder">
              {yourOrder.map(dish => (
                <li key={dish.id}>
                  <RemoveDishButton onRemoveDish={() => removeDish(dish)} />
                  <span className="ingredientText">
                    Dish {dish.id}:{" "}
                    {dish.ingredients
                      .map(ing => `${ing.emoji} ${ing.name}`)
                      .join(", ")}
                    {" — "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD"
                    }).format(dish.totalcost)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="costSummary text-bold text-center">
              Total Order cost: {grandTotal}
            </p>
          </div>
        )}
        <Link to="/buildadish">
          <DishButton>
            Add Another Dish
          </DishButton>
        </Link>
        <br></br>
        <OrderButton sendToKitchen={sendToKitchen} />
      </div>
    </div>
  );
}