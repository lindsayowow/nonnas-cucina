import React from 'react';

export default function OrderButton({ sendToKitchen,disabled }) {
    return (
        <button
            className="btn OrderButton"
            onClick={sendToKitchen}
            disabled={disabled}
        >
            Send Order to Kitchen 
        </button>
    );
}