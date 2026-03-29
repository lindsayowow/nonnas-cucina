import React from 'react';

export default function OrderButton({ sendToKitchen }) {
    return (
        <button
            className="btn OrderButton"
            onClick={sendToKitchen}
        >
            Send to Kitchen
        </button>
    );
}