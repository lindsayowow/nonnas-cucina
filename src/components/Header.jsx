import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


export default function Header() {
  return (
    <>
      <header>
        <h2>Nonna's Cucina</h2>
        <p>placeholder for small logo here</p>
        <Link to="/">Home</Link>
        <Link to="/buildadish">Build a Dish</Link>
        <Link to="/about">About</Link>
      </header >
    </>
  )
}
