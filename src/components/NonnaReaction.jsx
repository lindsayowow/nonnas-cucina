import React from 'react';
import '../styles/nonna.css';
import NonnaNeutral from '../assets/nonna-neutral.png';
import { useDishBuilderContext } from '../context/DishBuilderContext';

export default function NonnaReaction() {
    const {
        selectedIngredients,
        showNonnaWarning
    } = useDishBuilderContext();

    return (
        <div className="card nonna">
            <h2 className="text-center">Verify Your Selections</h2>

            <img
                src={NonnaNeutral}
                alt="Nonna reacting"
                className="nonnaNeutral"
            />

            <p className="text-center">
                You have {selectedIngredients.length} ingredients in your dish.
                {showNonnaWarning && " (⚠️ Warning active)"}
            </p>
        </div>
    );
}