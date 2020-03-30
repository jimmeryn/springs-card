import React from "react";

const navButton = (name, active, id, setActiveButton) => {
  const buttonClass = `nav-button${active === id ? " active" : ""}`;
  return (
    <li className={buttonClass} key={id} onClick={() => setActiveButton(id)}>
      <h3>{name}</h3>
    </li>
  );
};

export default navButton;
