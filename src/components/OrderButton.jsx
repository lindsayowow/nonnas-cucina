import React from 'react'
import '../styles/BuildADish.css';

export default function OrderButton({ sendToKitchen }) {
    return (
        <button className="OrderButton"
            onClick={() => sendToKitchen()}>
            Send to Kitchen
        </button>
    );
}