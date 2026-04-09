import React from 'react';
import '../styles/four-square.css';
import squareData from "../data/squareData.json";

export default function FourSquare() {
  return (
    <div className="foursquare-grid readable-font">
      {squareData.map((item, index) => (
        <div key={index} className="square">
          <p className="icon">{item.icon}</p>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}