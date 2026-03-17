import React from 'react';
import '../styles/Buttons.css';

export default function FilterButton(props) {
  return (
    <div className="filterButtons">
      {props.DietaryFilters.map((filter, index) => (
        <React.Fragment key={filter}>
          <button
            className="IngredientButton"
            onClick={() => props.onSelectedFilter(filter)}
          >
            {filter}
          </button>

          {index === 5 && <div className="break"></div>}
          {index === 10 && <div className="break"></div>}
        </React.Fragment>
      ))}
    </div>
  );
}