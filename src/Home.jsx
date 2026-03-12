import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';


export default function Home() {
  return (
    <div className="hero">
      <p>placeholder for larger logo</p>
      <h1>Welcome to Nonna's Cucina</h1>
      <h3>Build safe, delicious dishes that meet you and your family's dietary needs</h3>
      <p>insert foursquare grid here</p>
      <Link to="/buildadish">
        <button className="build">Start Building Your Dish</button>
      </Link>
    </div>
  )
}
