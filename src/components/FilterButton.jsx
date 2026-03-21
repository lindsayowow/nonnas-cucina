import React from 'react';
import '../styles/BuildADish.css';

export default function FilterButton(props) {
  return (
    <div className="filterButtons">
      {props.DietaryFilters.map((filter) => (
        <button
          className={
            props.selectedFilters.includes(filter)
              ? "FilterButton active"
              : "FilterButton"
          }

          onClick={() => props.onToggleFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}