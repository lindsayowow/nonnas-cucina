import React from 'react';
import '../styles/four-square.css';
import squareData from "../data/squareData.json";
import useInView from "../hooks/useInView";

export default function FourSquare() {
  const [gridRef, inView] = useInView({ threshold: 0.75 });

  return (
    <div
      ref={gridRef}
      className={`foursquare-grid ${inView ? "animate-sequence" : ""}`}
    >
      {squareData.map((item, index) => (
        <div
          key={index}
          className={`square ${inView ? "animate" : ""}`}
          style={{ animationDelay: `${index * 2}s` }}
        >
          <p className="icon">{item.icon}</p>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}