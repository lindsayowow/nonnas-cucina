import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
// Logo source: designed by felicities / Freepik — Creative Commons License (CC BY 4.0)
// Original URL: https://www.freepik.com/free-vector/grandmother-cooking-kitchen-cartoon-vector-chibi-style-happy-grandparents-day_206804388.htm
import nonnasLogo from '../assets/Nonnas_logo.png';


export default function Footer() {
  return (
    <div>
      <footer>

        <Link to="/about">Contact Us</Link>
       <p>&copy; 2026 Nonna's Cucina -- Making ordering safer for families with dietary needs</p>
       <a href="http://www.freepik.com">Logo designed by felicities / Freepik</a>
</footer>
    </div>
  )
}
