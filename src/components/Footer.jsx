import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

// Logo and Nonna Reactions: designed by felicities / Freepik — Creative Commons License (CC BY 4.0)
// Original URL: https://www.freepik.com/search?format=search&term=%40felicities+grandmother
// Home image: designed by Muhammed Adnan / Vecteezy — Creative Commons License (CC BY 4.0)
// Original URL: https://www.vecteezy.com/vector-art/49241829-grandmother-cartoon-mascot-element-illustration-grandmother-icon

export default function Footer() {
  return (
    <footer>
      <Link to="/about#contact">Contact Us</Link>

      <div className="tagline">
        <p>
          &copy; 2026 Nonna's Cucina <br />
          <em>Making ordering safer for families with dietary needs</em>
        </p>
      </div>

      <div className="attributes">
        <a href="http://www.freepik.com">
          <i>Header logo and Nonna reactions designed by felicities / Freepik</i>
        </a>
        <br />
        <a href="http://www.vecteezy.com">
          <i>Home image designed by Muhammed Adnan / Vecteezy</i>
        </a>
      </div>
    </footer>
  );
}