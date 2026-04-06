import React from 'react';
import '../styles/nonna.css';

import NonnaNeutral from '../assets/nonna-neutral.png';
import NonnaWarning from '../assets/nonna-warning.png';
import NonnaOneIngredient from '../assets/nonna-one-ingredient.png';
import NonnaGoodStart from '../assets/nonna-good-start.png';
import NonnaEncouraging from '../assets/nonna-encouraging.png';
import NonnaAlmostThere from '../assets/nonna-almostThere.png';
import NonnaHappy from '../assets/nonna-happy.png';
import NonnaComplete from '../assets/nonna-complete.png';
import NonnaSpecial from '../assets/nonna-special.png';

import nonnaStates from "../data/nonna.json";
import { useDishBuilderContext } from '../context/DishBuilderContext';

const nonnaImages = {
    neutral: NonnaNeutral,
    "one-ingredient": NonnaOneIngredient,
    "good-start": NonnaGoodStart,
    encouraging: NonnaEncouraging,
    almostThere: NonnaAlmostThere,
    happy: NonnaHappy,
    complete: NonnaComplete,
    "special-dish": NonnaSpecial,
    warning: NonnaWarning
};

function getNonnaState({ ingredientCount, selectedIngredients, showNonnaWarning }) {
    // 1. Warning overrides everything
    if (showNonnaWarning) {
        return nonnaStates.find(s => s.state === "warning");
    }

    // 2. COMPLETE DISH LOGIC — all categories covered
    const requiredCategories = ["protein", "veggie", "noodle", "sauce", "topping"];

    const selectedCategories = new Set(
        selectedIngredients.map(ing => ing.category)
    );

    const hasAllCategories = requiredCategories.every(cat =>
        selectedCategories.has(cat)
    );

    if (hasAllCategories) {
        return nonnaStates.find(s => s.state === "complete");
    }

    // 3. Ingredient-count logic (0–5)
    const matchByCount = nonnaStates.find(
        s => s.ingredientCount === ingredientCount
    );
    if (matchByCount) {
        return matchByCount;
    }

    // 4. More than 5 ingredients → happy
    if (ingredientCount > 5) {
        return nonnaStates.find(s => s.state === "happy");
    }

    // 5. Fallback
    return nonnaStates.find(s => s.state === "neutral");
}

export default function NonnaReaction() {
    const {
        selectedIngredients,
        showNonnaWarning,
        yourOrder
    } = useDishBuilderContext();

    const ingredientCount = selectedIngredients.length;

    // Debug log
    console.log("DEBUG Nonna:", {
        selectedIngredients,
        ingredientCount,
        yourOrder
    });

    const nonnaState = getNonnaState({
        ingredientCount,
        selectedIngredients,
        showNonnaWarning
    });

    return (
        <div className={`card nonna ${showNonnaWarning ? "nonna--warning" : ""}`}>
            <h2 className="text-center">Verify Your Selections</h2>
            <div className="nonna-speech-wrapper">
                <div className="nonna-speech-bubble">
                    {nonnaState.message}
                </div>
            </div>
            <div className="nonna-image-wrapper">
                <img
                    src={
                        showNonnaWarning
                            ? NonnaWarning
                            : nonnaImages[nonnaState.state] || NonnaNeutral
                    }
                    alt="Nonna reacting"
                    className={`nonnaNeutral ${showNonnaWarning ? "nonnaNeutral--shake" : ""}`}
                />
            </div>

        </div>
    );
}