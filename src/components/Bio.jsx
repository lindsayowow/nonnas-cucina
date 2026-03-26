import React from 'react';
import '../styles/Bio.css';
import profilePic from '../assets/profilepic.jpg';

export default function Bio() {
  return (
      <div className="bio">
        <h3 className="headingTitle">About the Developer</h3>
        <img src={profilePic} alt="A middle-aged woman wearing glasses and a white suit with long brown hair" className="proPic" />
        <p>Hi! I'm Lindsay, a web development student building tools that make ordering safer for families with complex dietary needs. Nonna's Cucina was inspired by the challenges families face when trying to order food safely, especially when dealing with allergies, dietary restrictions, or language barriers. This app combines visual selection with smart filtering to help everyone build safe, delicious meals.</p>
        <p>Placeholder for Portfolio link</p>
        </div>
  )
}
