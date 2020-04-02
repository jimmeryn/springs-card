import React, { useState } from "react";
import navButton from "./NavButton";

const menuListItems = require("./data.json").menuListItems;

const createButtons = (names, activeButton, setActiveButton) =>
  names.map((name, i) => navButton(name, activeButton, i, setActiveButton));

const scrollToBottom = () => {
  window.scrollTo({
    top: 1000,
    behavior: "smooth"
  });
};

const MenuList = ({ menuClassName, activateHamburger }) => {
  const [activeButton, setActiveButton] = useState(null);

  const clickMenuItem = id => {
    setActiveButton(id);
    activateHamburger(false);
    scrollToBottom();
  };

  return (
    <ul className={menuClassName}>
      {createButtons(menuListItems, activeButton, clickMenuItem)}
    </ul>
  );
};

export default MenuList;
