import React from 'react';
import '../styles/BuildADish.css';

export default function FilterButton(props) {
  return (
    <div className="filterButtons">
      {props.DietaryFilters.map((filter) => (
          <button
            className="FilterButton"
            onClick={() => props.onSelectedFilter(filter)}
          >
            {filter}
          </button>
      ))}
    </div>
  );
}