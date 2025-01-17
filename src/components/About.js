import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
  <h2>About Me</h2>
  <p>Modern web development emphasizes responsive design, 
    ensuring websites perform seamlessly across devices, 
    and leverages frameworks and libraries to streamline development and improve efficiency.</p>
  <img src={image} alt="I made this"/>

  </div>
  );
}

export default About;
