import React, { useState } from "react";

const Hamburger = () => {
  const [hamActive, setHamActive] = useState(false);
  const hamClass = `hamburger${hamActive ? "--active" : ""}`;

  return (
    <button className={hamClass} onClick={() => setHamActive(!hamActive)}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
