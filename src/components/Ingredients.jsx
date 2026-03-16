import React from 'react';
import '../styles/Ingredients.css';

export default function Ingredients() {
  return (
          <div className="ingredients">
            <h2>Choose Your Ingredients</h2>
            {/* note to self: I should be able to create a component for these buttons */}
            <div className="proteins"><p>Protein buttons here</p></div>
            <div className="veggies"><p>Vegetable buttons here</p></div>
            <div className="noodles"><p>Noodle buttons here</p></div>
            <div className="sauces"><p>Sauce buttons here</p></div>
            <div className="toppings"><p>Topping buttons here</p></div>
          </div>
  )
}
