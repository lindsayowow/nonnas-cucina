import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import nonnasLogo from '../assets/Nonnas_Logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <img
          src={nonnasLogo}
          alt="Nonna's Kitchen logo showing a drawing of a white-haired grandmother cooking in a kitchen"
          className="logo"
        />

        <div className="nonna-font middle">
          <h1 className="title">Nonna's Cucina</h1>
        </div>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="right">
          <nav className={`nav-links ${open ? "open" : ""}`}>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/buildadish" onClick={() => setOpen(false)}>Build a Dish</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/cart" onClick={() => setOpen(false)}>🛒</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
