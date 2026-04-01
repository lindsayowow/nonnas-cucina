import React from 'react';
import '../styles/nonna.css';
import NonnaNeutral from '../assets/nonna-neutral.png';

export default function NonnaReaction() {
    return (
        <div className="card nonna">
            <h2 className="text-center">Verify Your Selections</h2>

            <img
                src={NonnaNeutral}
                alt="Nonna reacting"
                className="nonnaNeutral"
            />

            <p className="text-center">
                {/* Placeholder for Nonna’s sayings */}
            </p>
        </div>
    );
}