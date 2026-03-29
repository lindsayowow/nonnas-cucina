import React from 'react';
import '../styles/filters.css';
import FilterButton from './FilterButton.jsx';

export default function Filters(props) {
    return (
        <div className="card filterClass">
            <h2 className="text-center">Dietary Filters</h2>

            <FilterButton
                DietaryFilters={props.DietaryFilters}
                selectedFilters={props.selectedFilters}
                onToggleFilter={props.onToggleFilter}
            />
        </div>
    );
}