import React from 'react'

export default function RemoveDishButton({ onRemoveDish }) {
  return (
    <button className="removeDishButton" onClick={onRemoveDish}>
      x
    </button>
  );
}

