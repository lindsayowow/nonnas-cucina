import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div>
      <footer>

        <Link to="/about">Contact Us</Link>
       <p>&copy; 2026 Nonna's Cucina -- Making ordering safer for families with dietary needs</p>
</footer>
    </div>
  )
}
