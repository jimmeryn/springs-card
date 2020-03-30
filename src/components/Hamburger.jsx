import React from "react";

const Hamburger = ({ activateHamburger }) => {
  // const hamClass = `hamburger${isHamburgerActive ? "--active" : ""}`;
  return (
    <button className="hamburger" onClick={activateHamburger}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
