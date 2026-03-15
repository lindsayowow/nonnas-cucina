import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
// Logo source: designed by felicities / Freepik — Creative Commons License (CC BY 4.0)
// Original URL: https://www.freepik.com/free-vector/grandmother-cooking-kitchen-cartoon-vector-chibi-style-happy-grandparents-day_206804388.htm

export default function Footer() {
  return (
    <footer>
      <Link to="/about">Contact Us</Link>
      <div className="tagline">
        <p>&copy; 2026 Nonna's Cucina - <em>Making ordering safer for families with dietary needs</em></p></div>
      <div className="attributes">
        <a href="http://www.freepik.com"><i>Logo designed by felicities / Freepik</i></a></div>
    </footer>
  )
}
