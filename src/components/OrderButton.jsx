import React from 'react';

export default function OrderButton({ sendToKitchen,disabled }) {
    return (
        <button
            className="btn OrderButton"
            // example of user interaction updating state - yourOrder updates
            onClick={sendToKitchen}
            disabled={disabled}
        >
            Send Order to Kitchen 
        </button>
    );
}