import React from 'react';
import '../styles/BuildADish.css';

export default function DishButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
