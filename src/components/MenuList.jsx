import React, { useState } from "react";
import navButton from "./NavButton";

const createButtons = (names, activeButton, setActiveButton) =>
  names.map((name, i) => navButton(name, activeButton, i, setActiveButton));

const MenuList = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <ul className="menu-list">
      {createButtons(
        ["About Us", "What We Do", "Contact Us"],
        activeButton,
        setActiveButton
      )}
    </ul>
  );
};

export default MenuList;
