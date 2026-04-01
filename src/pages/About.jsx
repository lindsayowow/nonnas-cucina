import React from "react";
import Bio from "../components/Bio";
import Form from "../components/Form";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <Bio />
      <Form />
    </div>
  );
}