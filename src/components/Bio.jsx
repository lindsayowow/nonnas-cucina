import React from 'react';
import '../styles/Bio.css';
import profilePic from '../assets/profilepic.jpg';

export default function Bio() {
  return (
    <div className="bio">
      <h2 className="headingTitle">About the Developer</h2>
      <img src={profilePic} alt="A middle-aged woman wearing glasses and a white suit with long brown hair" className="proPic" />
      <p>Hi! I'm Lindsay, a software development student building tools that make ordering safer for families with complex dietary needs. Nonna's Cucina was inspired by the challenges families face when trying to order food safely, especially when dealing with allergies, dietary restrictions, or language barriers. This app combines visual selection with smart filtering to help everyone build safe, delicious meals.</p>
      <div className="bioButtons">
        <a href="https://github.com/lindsayowow" target="_blank" rel="noopener noreferrer">
          <button className="gitHub">GitHub</button></a>
        <a href="https://www.linkedin.com/in/lindsay-webb" target="_blank" rel="noopener noreferrer">
          <button className="linkedIn">LinkedIn</button></a>
      </div>
    </div>
  )
}
