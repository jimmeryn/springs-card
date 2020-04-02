import React from "react";
import heroImg from "../img/Hero.png";

const Hero = () => (
  <div className="hero">
    <div className="hero-text-wrapper">
      <div className="hero-text">
        <h1>We manufacture springs that you need</h1>
        <h4>
          Our products and services are designed to spark enthusiasm, improve
          quality of life, and help conserve natural resources. We want to
          deliver top quality and reliability. Our springs are quality assured,
          and produced to the highest Standards, at competitive prices.
        </h4>
      </div>
    </div>
    <div className="hero-img-wrapper">
      <img src={heroImg} alt="hero" className="hero-img" />
    </div>
  </div>
);

export default Hero;
