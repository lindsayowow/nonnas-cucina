import React from 'react';

export default function FilterButton(props) {
  return (
    <div className="filterButtons">
      {props.DietaryFilters.map((filter) => {
        const isActive = props.selectedFilters.includes(filter);

        return (
          <button
            key={filter}
            onClick={() => props.onToggleFilter(filter)}
            className={`btn FilterButton ${isActive ? "active" : ""}`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}