import React from "react";
import heroImg from "../img/Hero.png";

const Hero = () => {
  const data = require("./data.json");
  const language = window.navigator.userLanguage || window.navigator.language;
  return (
    <div className="hero">
      <div className="hero-text-wrapper">
        <div className="hero-text">
          <h1>
            {language === "pl" ? data.heroMainText.pl : data.heroMainText.eng}
          </h1>
          <h4>{language === "pl" ? data.heroText.pl : data.heroText.eng}</h4>
        </div>
      </div>
      <div className="hero-img-wrapper">
        <img src={heroImg} alt="hero" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
