import React, { useEffect } from 'react';
import '../styles/About.css';
import Bio from '../components/Bio.jsx';
import Form from '../components/Form.jsx';
import { useLocation } from 'react-router-dom';

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="about-container">
      <Bio />

      <div className="contact" id="contact">
        <Form />
      </div>
    </div>
  );
}