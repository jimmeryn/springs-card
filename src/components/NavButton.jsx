import React from "react";

const classNames = require("classnames");

const navButton = (name, active, id, setActiveButton) => {
  const buttonClass = classNames("nav-button", { active: active === id });
  return (
    <li className={buttonClass} key={id} onClick={() => setActiveButton(id)}>
      <h3>{name}</h3>
    </li>
  );
};

export default navButton;
