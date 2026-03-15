import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import NonnaHome from './assets/Nonna_Home.png';

export default function Home() {
  return (
    <div className="hero">
      <img src={NonnaHome} alt="Nonna is smiling at a countertop with hearts surrounding her head" className="logononna" />
      <h2>Welcome to Nonna's Cucina</h2>
      <h3>Build safe, delicious dishes that meet you and your family's dietary needs</h3>
      <p>insert foursquare grid here</p>
      <Link to="/buildadish">
        <button className="build">Start Building Your Dish</button>
      </Link>
    </div>
  )
}
