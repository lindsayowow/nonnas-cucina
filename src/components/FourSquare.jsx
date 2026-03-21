import React from 'react';
import '../styles/FourSquare.css';

export default function FourSquare() {
  return (
      <div class="foursquare-grid">
        <div className="square">
          <p className="icon">🛡️</p>
          <h4>Allergy Safe Filtering</h4>
          <p>Set your dietary restrictions and get warned before selecting unsafe ingredients</p>
        </div>
        <div className="square">
          <p className="icon">🎨</p>
          <h4>Picture-Based Selection</h4>
          <p>Easy visual ingredient selection for non-readers and all ages</p>
        </div>
        <div className="square">
          <p className="icon">👵</p>
          <h4>Fun Feedback from Nonna</h4>
          <p>Nonna reacts to your dish choices with encouraging words and helpful warnings</p>
        </div>
        <div className="square">
          <p className="icon">👨‍🍳</p>
          <h4>Staff-Friendly Orders</h4>
          <p>Clear visual displays for kitchen staff to process orders quickly</p>
          </div>
      </div>
  )
}
