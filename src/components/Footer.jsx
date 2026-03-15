import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

// Logo: designed by felicities / Freepik — Creative Commons License (CC BY 4.0)
// Original URL: https://www.freepik.com/free-vector/grandmother-cooking-kitchen-cartoon-vector-chibi-style-happy-grandparents-day_206804388.htm
// Home image: designed by Muhammed Adnan / Vecteezy — Creative Commons License (CC BY 4.0)
// Original URL: https://www.vecteezy.com/vector-art/49241829-grandmother-cartoon-mascot-element-illustration-grandmother-icon

export default function Footer() {
  return (
    <footer>
      <Link to="/about#contact">Contact Us</Link>
      <div className="tagline">
        <p>&copy; 2026 Nonna's Cucina <br></br> <em>Making ordering safer for families with dietary needs</em></p></div>
      <div className="attributes">
        <a href="http://www.freepik.com"><i>Header logo designed by felicities / Freepik</i></a><br></br>
        <a href="http://www.vecteezy.com"><i>Home image designed by Muhammed Adnan / Vecteezy</i></a></div>
    </footer>
  )
}
