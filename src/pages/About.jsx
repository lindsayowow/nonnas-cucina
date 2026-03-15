import React from 'react';
import '../styles/About.css';
import Form from '../components/Form.jsx';
import Bio from '../components/Bio.jsx';

export default function About() {
  return (
    <div className="about-container">
      <h2 className="headingTitle">About the App</h2>
      <Bio />
      <div className="contact">
        <Form />
      </div>
    </div>
  );
}