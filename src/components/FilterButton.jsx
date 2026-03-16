import React from 'react';
import '../styles/Filters.css';


export default function FilterButton(props) {
  return (
    <div>
      <div className="filterButtons">
        {props.DietaryFilters.map((filter, index) =>
          <React.Fragment key={filter}>
            <button className="IngredientButton">{filter}</button>

            {index === 5 && <div className="break"></div>}
            {index === 10 && <div className="break"></div>}
          </React.Fragment>

        )}
      </div>
    </div>
  )
}
