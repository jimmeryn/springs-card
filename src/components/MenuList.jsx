import React, { useState } from "react";
import navButton from "./NavButton";

const language =
  (window.navigator.userLanguage || window.navigator.language) === "pl"
    ? "pl"
    : "eng";
const menuListItems = require("./data.json").menuListItems[language];

const createButtons = (names, activeButton, setActiveButton) =>
  names.map((name, i) => navButton(name, activeButton, i, setActiveButton));

const MenuList = ({ menuClassName, activateHamburger, executeScroll }) => {
  const [activeButton, setActiveButton] = useState(null);

  const clickMenuItem = id => {
    setActiveButton(id);
    activateHamburger(false);
    executeScroll();
  };

  return (
    <ul className={menuClassName}>
      {createButtons(menuListItems, activeButton, clickMenuItem)}
    </ul>
  );
};

export default MenuList;
