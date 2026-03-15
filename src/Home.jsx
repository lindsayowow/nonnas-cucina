import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import NonnaHome from './assets/Nonna_Home.png';

function IngredientBox({ name }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className={`box ${selected ? "selected" : ""}`}
      onClick={() => setSelected(!selected)}
    >
      {name}
    </div>
  );
}


export default function Home() {
  return (
    <div className="hero">
      <img src={NonnaHome} alt="Nonna is smiling at a countertop with hearts surrounding her head" className="logononna" />

      <h2>Welcome to Nonna's Cucina!</h2>

      <h3>Build safe, delicious dishes that meet you and your family's dietary needs</h3>

      <div class="foursquare-grid">
        <div class="square">
          <p class="icon">🛡️</p>
          <h4>Allergy Safe Filtering</h4>
          <p>Set your dietary restrictions and get warned before selecting unsafe ingredients</p>
        </div>
        <div class="square">
          <p class="icon">🎨</p>
          <h4>Picture-Based Selection</h4>
          <p>Easy visual ingredient selection for non-readers and all ages</p>
        </div>
        <div class="square">
          <p class="icon">👵</p>
          <h4>Fun Feedback from Nonna</h4>
          <p>Nonna reacts to your dish choices with encouraging words and helpful warnings</p>
        </div>
        <div class="square">
          <p class="icon">👨‍🍳</p>
          <h4>Staff-Friendly Orders</h4>
          <p>Clear visual displays for kitchen staff to process orders quickly</p>
          </div>
      </div>

      <Link to="/buildadish" className="buildbutton">
        <button className="build">Start Building Your Dish</button>
      </Link>
    </div>
  )
}
