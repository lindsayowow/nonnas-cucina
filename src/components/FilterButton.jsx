import React from 'react';

export default function FilterButton(props) {
  return (
    <div className="filterButtons">
      {props.DietaryFilters.map((filter) => {
        const isActive = props.selectedFilters.includes(filter);

        return (
          <React.Fragment key={filter}>
            <button
              onClick={() => props.onToggleFilter(filter)}
              className={`btn FilterButton ${isActive ? "active" : ""}`}
            >
              {filter}
            </button>

            {/* This section is to add the line breaks if I change my mind again, don't forget to add "index" back to props */}
            {/* {index === 5 && <div className="break"></div>} */}
            {/* {index === 10 && <div className="break"></div>} */}
          </React.Fragment>
        );
      })}
    </div>
  );
}