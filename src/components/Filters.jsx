import React from 'react';
import '../styles/Buttons.css';
import FilterButton from './FilterButton.jsx';

export default function Filters(props) {
    return (
        <div className="filterClass">
            <h2>Dietary Filters</h2>
            <FilterButton DietaryFilters={props.DietaryFilters}/>
        </div>
    )
}
