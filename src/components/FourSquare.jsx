import React, { useState } from 'react';
import '../styles/FourSquare.css';
import squareData from "../data/squareData.json";

export default function FourSquare() {
  const [selectedSquare] = useState(null);

  return (
    <div className="foursquare-grid">
      {squareData.map((item, index) => (
        <div
          key={index}
          className={`square ${selectedSquare === index ? "selected" : ""}`}
        >
          <p className="icon">{item.icon}</p>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
