import React from 'react';
import '../styles/BuildADish.css';

export default function BuildADish() {
  return (
    <div className="build-container">
      <div className="filters">
        <h2>Step 1: Dietary Filters</h2>
        <p>Filter buttons go here</p>
      </div>
      <div className="ingredient-section">
        <h2>Step 2: Choose Your Ingredients</h2>
        {/* note to self: I should be able to create a component for these buttons */}
        <div className="proteins"><p>Protein buttons here</p></div>
        <div className="veggies"><p>Vegetable buttons here</p></div>
        <div className="noodles"><p>Noodle buttons here</p></div>
        <div className="sauces"><p>Sauce buttons here</p></div>
        <div className="toppings"><p>Topping buttons here</p></div>
      </div>
      <div className="nonna">
        <p>Placeholder for changing Nonna image - remember to format pics to same size</p>
        <p>Nonna's funny sayings here</p>
      </div>
      <div className="dish">
        <h3>Your Dish</h3>
        <p>Add to Order button - moves list to Your Order as 1 array with ingredient objects</p>
        <p>list of selected items goes here - component?</p>
      </div>
      <div className="order">
        <h3>Your Order - could the h3 be an if component?</h3>
        <p>Add to Order button</p>
        <p>list of completed order array and total price goes here - another component?</p>
        <p>Send to kitchen - sent to nowhere, clears order list</p>
      </div>

    </div>
  )
}
