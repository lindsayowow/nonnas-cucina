import React from 'react'

export default function DishButton() {
    return (
            <button key="dishButton"
                onClick={() => {onUpdateOrder}}
          className="dishButton">
        </button>
  );
}