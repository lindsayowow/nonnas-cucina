import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import NonnaHome from '../assets/Nonna_Home.png';
import FourSquare from '../components/FourSquare';

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-row">
        <div className="hero-column hero-left">
          <p className="mangia left top">Mangia</p>
          <p className="mangia left bottom">Mangia</p>
        </div>

        <div className="hero-column hero-center">
          <div className="nonna-wrapper">
            <img
              src={NonnaHome}
              alt="Nonna is smiling at a countertop with hearts surrounding her head"
              className="logononna"
            />
          </div>
        </div>

        <div className="hero-column hero-right">
          <p className="mangia right top">Mangia</p>
          <p className="mangia right bottom">Mangia</p>
        </div>
      </div>

      <h1 className="nonna-font">Benvenuti a Nonna's Cucina!</h1>
      <h2>Build safe, delicious dishes that meet you and your family's dietary needs</h2>

      <Link to="/buildadish" className="buildbutton">
        <button className="btn">Start Building Your Dish</button>
      </Link>

      <FourSquare />
    </div>
  );
}
