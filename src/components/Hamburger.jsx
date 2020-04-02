import React from "react";

const Hamburger = ({ activateHamburger, hamburgerClassName }) => {
  return (
    <button className={hamburgerClassName} onClick={activateHamburger}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
