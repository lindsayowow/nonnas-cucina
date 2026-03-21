import React from 'react';
import '../styles/BuildADish.css';
import FilterButton from './FilterButton.jsx';

export default function Filters(props) {
    return (
        <div key={props.selectedFilters} className="filterClass">
            <h2>Dietary Filters</h2>
            <FilterButton key={props.DietaryFilters}
            DietaryFilters={props.DietaryFilters} 
            onSelectedFilters={props.onSelectedFilters}
            selectedFilters={props.selectedFilters}
            onToggleFilter={props.onToggleFilter} />
        </div>
    )
}
