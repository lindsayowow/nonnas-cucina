import React from 'react';
import '../styles/order.css';
import OrderButton from './OrderButton';
import RemoveDishButton from './RemoveDishButton';

export default function Order({ yourOrder, grandTotal, sendToKitchen, removeDish }) {
  return (
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
                <span>
                  Dish {dish.id}:{" "}
                  {dish.ingredients.map(ing => ing.emoji).join(" ")}
                  {" — "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                  }).format(dish.totalcost)}
                </span>
                <RemoveDishButton 
                onRemoveDish={() => removeDish(dish)} />
              </li>
            ))}
          </ul>

          <p className="costSummary text-bold text-center">
            Total Order cost: {grandTotal}
          </p>
        </div>
      )}

      <OrderButton sendToKitchen={sendToKitchen} />
    </div>
  );
}