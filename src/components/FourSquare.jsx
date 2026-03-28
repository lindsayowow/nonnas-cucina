import React from 'react';
import '../styles/FourSquare.css';
import squareData from "../data/squareData.json";
import useInView from "../hooks/useInView";

export default function FourSquare() {
const [gridRef, inView] = useInView({ threshold: 0.75 });
  return (
    <div ref={gridRef} className="foursquare-grid">
      {squareData.map((item, index) => (
        <div
          key={index}
          className={`square ${inView ? "animate" : ""}`}
          style={{ animationDelay: `${index * 3}s` }}
        >
          <p className="icon">{item.icon}</p>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
