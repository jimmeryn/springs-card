import React from "react";

const About = ({ reference }) => (
  <div className="about" ref={reference}>
    <h1>About Us</h1>
    {Array(20)
      .fill(1)
      .map((e, i) => (
        <div key={i}>{e}</div>
      ))}
  </div>
);

export default About;
