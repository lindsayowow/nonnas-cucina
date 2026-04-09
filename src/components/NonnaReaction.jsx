import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/nonna.css";

import NonnaNeutral from "../assets/nonna-neutral.png";
import NonnaWarning from "../assets/nonna-warning.png";
import NonnaOneIngredient from "../assets/nonna-one-ingredient.png";
import NonnaGoodStart from "../assets/nonna-good-start.png";
import NonnaEncouraging from "../assets/nonna-encouraging.png";
import NonnaAlmostThere from "../assets/nonna-almostThere.png";
import NonnaHappy from "../assets/nonna-happy.png";
import NonnaComplete from "../assets/nonna-complete.png";
import NonnaSpecial from "../assets/nonna-special.png";

import nonnaStates from "../data/nonna.json";
import { useDishBuilderContext } from "../context/DishBuilderContext";

const nonnaImages = {
  neutral: NonnaNeutral,
  "one-ingredient": NonnaOneIngredient,
  "good-start": NonnaGoodStart,
  encouraging: NonnaEncouraging,
  almostThere: NonnaAlmostThere,
  happy: NonnaHappy,
  complete: NonnaComplete,
  "special-dish": NonnaSpecial,
  warning: NonnaWarning,
};

// Accessible alt text for each reaction
const altTextMap = {
  neutral: "Nonna looks calm.",
  "one-ingredient": "Nonna notices you’ve added your first ingredient.",
  "good-start": "Nonna approves your early progress.",
  encouraging: "Nonna is encouraging you to keep going.",
  almostThere: "Nonna says you're almost done.",
  happy: "Nonna is happy with your dish.",
  complete: "Nonna celebrates your completed dish.",
  "special-dish": "Nonna has a special reaction for this dish.",
  warning: "Nonna is giving a warning about your selection.",
};

// Determine which Nonna state to show
function getNonnaState({ ingredientCount, selectedIngredients, showNonnaWarning }) {
  if (showNonnaWarning) {
    return nonnaStates.find((s) => s.state === "warning");
  }

  const requiredCategories = ["protein", "veggie", "noodle", "sauce", "topping"];
  const selectedCategories = new Set(selectedIngredients.map((ing) => ing.category));
  const hasAllCategories = requiredCategories.every((cat) => selectedCategories.has(cat));

  if (hasAllCategories) {
    return nonnaStates.find((s) => s.state === "complete");
  }

  const matchByCount = nonnaStates.find((s) => s.ingredientCount === ingredientCount);
  if (matchByCount) return matchByCount;

  if (ingredientCount > 5) {
    return nonnaStates.find((s) => s.state === "happy");
  }

  return nonnaStates.find((s) => s.state === "neutral");
}

export default function NonnaReaction() {
  const { selectedIngredients, showNonnaWarning, yourOrder } = useDishBuilderContext();

  const ingredientCount = selectedIngredients.length;
  const nonnaState = getNonnaState({
    ingredientCount,
    selectedIngredients,
    showNonnaWarning,
  });

  const cartCount = yourOrder.length;

  const cartMessage =
    cartCount === 0 ? (
      "Let’s get started with your order!"
    ) : (
      <>
        You have {cartCount} items in your{" "}
        <Link to="/cart" className="nonna-cart-link">
          cart
        </Link>
        .
      </>
    );

  const imageSrc = showNonnaWarning
    ? NonnaWarning
    : nonnaImages[nonnaState.state] || NonnaNeutral;

  const altText = altTextMap[nonnaState.state] || "Nonna reacting.";

  // ARIA live region for screen reader announcements
  const liveRef = useRef(null);
  useEffect(() => {
    if (liveRef.current) {
      liveRef.current.textContent = nonnaState.message;
    }
  }, [nonnaState]);

  // Detect reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const imageClass = prefersReducedMotion
    ? "nonna-image"
    : `nonna-image ${showNonnaWarning ? "nonna-image--shake" : ""}`;

  return (
    <div className={`card nonna ${showNonnaWarning ? "nonna--warning" : ""}`}>
      <h2 className="text-center">Verify Your Selections</h2>

      {/* Screen reader announcement region */}
      <div
        ref={liveRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      ></div>

      <div className="nonna-speech-wrapper">
        <div className="nonna-speech-bubble">{nonnaState.message}</div>
      </div>

      <div className="nonna-image-wrapper">
        <img
          src={imageSrc}
          alt={altText}
          className={imageClass}
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width="180"
          height="180"
        />
      </div>

      <div className="nonna-cart-message">{cartMessage}</div>
    </div>
  );
}
