import React from 'react';
import '../styles/Filters.css';
// import '../styles/Buttons.css';

export default function Filters(props) {
    return (
        <div className="filterClass">
            <h2>Dietary Filters</h2>
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
