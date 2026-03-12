import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <h2>About the App</h2>
      <div className="bio">
        <h3>About the Developer</h3>
        <p>maybe a picture here</p>
        <p>Hi! I'm Lindsay, a web development student building tools that make ordering safer for families with complex dietary needs. Nonna's Cucina was inspired by the challenges families face when trying to order food safely, especially when dealing with allergies, dietary restrictions, or language barriers. This app combines visual selection with smart filtering to help everyone build safe, delicious meals.</p>
        <p>Placeholder for Portfolio link</p>
      </div>
      <div className="contact">
        <p>This will be my contact us form</p>
        <p>Name</p>
        <p>Email</p>
        <p>Message</p>
        <p>Submit button</p>
      </div>
    </div>
  )
}
