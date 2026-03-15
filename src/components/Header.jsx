import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import nonnasLogo from '../assets/Nonnas_logo.png';

export default function Header() {
  return (
    <>
      <header className="header">

        <img src={nonnasLogo} alt="Nonna's Kitchen logo showing a drawing of a white-haired grandmother cooking in a kitchen" className="logo" />

        <div className="middle">
          <h1 className="title">Nonna's Cucina</h1>
        </div>

        <div className="right">
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/buildadish">Build a Dish</Link>
            <Link to="/about">About</Link>
          </nav></div>
      </header >
    </>
  )
}
