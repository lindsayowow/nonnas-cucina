import React from 'react'

export default function ClearFilterButton(props) {
    return (
        <div className="clearButtons">
            <button
                className="clearButton"
                onClick={props.clearFilter}
                disabled={props.selectedFilters.length === 0}>
                Clear All Filters
            </button>
        </div>
    )
}
