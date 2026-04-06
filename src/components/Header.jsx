import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import nonnasLogo from '../assets/Nonnas_Logo.png';
import { useDishBuilderContext } from "../context/DishBuilderContext";

export default function Header() {
  const { yourOrder } = useDishBuilderContext();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img
            src={nonnasLogo}
            alt="Nonna's Kitchen logo showing a drawing of a white-haired grandmother cooking in a kitchen"
            className="logo"
          />
        </NavLink>

        <div className="nonna-font middle">
          <NavLink to="/" onClick={() => setOpen(false)}>
            <h1 className="title">Nonna's Cucina</h1>
          </NavLink>
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
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/buildadish" onClick={() => setOpen(false)}>Build a Dish</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/cart" onClick={() => setOpen(false)}>
              🛒 ({yourOrder.length})
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}