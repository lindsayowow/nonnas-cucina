import React from 'react';
import '../styles/filters.css';
import FilterButton from './FilterButton.jsx';
import ClearFilterButton from './ClearFilterButton.jsx';

export default function Filters(props) {
  return (
    <div className="card filterClass">
      <h2 className="text-center">Dietary Filters</h2>
      {/* Parent passing props to child */}
      <FilterButton
        DietaryFilters={props.DietaryFilters}
        selectedFilters={props.selectedFilters}
        onToggleFilter={props.onToggleFilter}
      />

      <ClearFilterButton
        clearFilter={props.clearFilter}
        selectedFilters={props.selectedFilters}
      />
    </div>
  );
}