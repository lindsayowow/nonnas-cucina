import React from 'react';
import '../styles/BuildADish.css';
import OrderButton from './OrderButton';

export default function Order({ yourOrder, grandTotal, sendToKitchen }) {
  return (
    <div className="order">
      <h2>Your Order</h2>

      {yourOrder.length === 0 ? (
        <div className="emptyOrder">
          <p className="clipboardEmoji">📋</p>
          <p>Your order is empty.</p>
        </div>
      ) : (
        <div>
          <ul className="activeOrder">
            {yourOrder.map(dish => (
              <li key={dish.id}>
                Dish {dish.id}:{" "}
                {dish.ingredients.map(ing => ing.emoji).join(" ")}
                {" — "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(dish.totalcost)}
              </li>
            ))}
          </ul>
          <p className="costSummary">Total Order cost: {grandTotal} </p>
        </div>
      )}
      <OrderButton sendToKitchen={sendToKitchen}/>
    </div>
  )
}
