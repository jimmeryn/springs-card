import React, { useState } from "react";
import Hamburger from "./Hamburger";
import MenuList from "./MenuList";
const Menu = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <menu>
      <MenuList />
      <Hamburger />
    </menu>
  );
};

export default Menu;
