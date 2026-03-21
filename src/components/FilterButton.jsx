import React from 'react';
import '../styles/BuildADish.css';

export default function FilterButton(props) {
  return (
    <div className="filterButtons">
      {props.DietaryFilters.map((filter) => (
        <button key={filter}
          onClick={() => props.onToggleFilter(filter)
          }
          className={
            props.selectedFilters.includes(filter)
              ? "FilterButton active"
              : "FilterButton"
          }
        >
          {filter}
        </button>
      ))}
    </div>
  );
}