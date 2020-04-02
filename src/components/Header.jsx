import React, { useState } from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";
import Hamburger from "./Hamburger";

const classNames = require("classnames");

const Header = () => {
  let [isHamburgerActive, changeHamburgerState] = useState(false);

  const hamburgerClassName = classNames("hamburger", [
    { active: isHamburgerActive }
  ]);

  const menuClassName =
    window.innerWidth < 800
      ? classNames("menu-list", [{ open: isHamburgerActive }])
      : "menu-list";

  const activateHamburger = () => {
    changeHamburgerState(!isHamburgerActive);
  };

  return (
    <header>
      <div className="header-container">
        <Logo />
        <Hamburger
          activateHamburger={activateHamburger}
          hamburgerClassName={hamburgerClassName}
        />
      </div>
      <MenuList
        menuClassName={menuClassName}
        activateHamburger={activateHamburger}
      />
    </header>
  );
};

export default Header;
