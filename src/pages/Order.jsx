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

  const [kitchenMessage, setKitchenMessage] = React.useState("");

  const handleSendToKitchen = () => {
    sendToKitchen();
    setKitchenMessage("Your order has been sent to Nonna's Kitchen!");
  };

  return (
    <div className="order-page">
      <div className="card order">
        <h2 className="text-center">Your Order</h2>

        {kitchenMessage && (
          <div className="kitchen-confirmation">
            {kitchenMessage}
          </div>
        )}

        {yourOrder.length === 0 ? (
          <div className="emptyOrder text-center">
            <p className="clipboardEmoji">📋</p>
            <p>Your current order is empty.</p>
          </div>
        ) : (
          <div>
            <ul className="activeOrder">
              {yourOrder.map(dish => {
                const emojis = dish.ingredients.map(ing => ing.emoji).join(" ");
                const names = dish.ingredients.map(ing => ing.name).join(", ");

                return (
                  <li key={dish.id}>
                    <div className="dishInfo">
                      <div className="dishLine">
                        <strong>Dish {dish.id}</strong>
                      </div>

                      <div className="dishLine">
                        {emojis}
                      </div>

                      <div className="dishLine">
                        {names}
                      </div>

                      <div className="dishLine">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD"
                        }).format(dish.totalCost)}
                      </div>
                    </div>

                    <RemoveDishButton
                      onRemoveDish={() => removeDish(dish)}
                    />
                  </li>
                );
              })}
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

        <OrderButton
          sendToKitchen={handleSendToKitchen}
          disabled={yourOrder.length === 0}
        />
      </div>
    </div>
  );
}
