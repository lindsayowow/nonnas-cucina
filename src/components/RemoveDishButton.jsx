import React from 'react';

export default function RemoveDishButton({ onRemoveDish = () => {} }) {
  return (
    <button
      className="removeDishButton"
      onClick={onRemoveDish}
      aria-label="Remove this dish from your order"
      title="Remove dish"
      type="button"
    >
      🗑️
    </button>
  );
}
