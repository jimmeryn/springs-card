import React, { useState } from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";
import Hamburger from "./Hamburger";

const classNames = require("classnames");

const Header = ({ pageReferences }) => {
  let [isHamburgerActive, makeitactive] = useState(false);
  const hamburgerClassName = classNames("hamburger", [
    { "--active": isHamburgerActive }
  ]);

  function activateHamburger() {
    console.log("bvsdbajsbdjhbhj");
    document.getElementsByClassName(hamburgerClassName).item(0).className
      ? (isHamburgerActive = makeitactive(!isHamburgerActive))
      : (isHamburgerActive = makeitactive(!isHamburgerActive));
  }

  return (
    <header>
      <div className="header-container">
        <Logo />
        <Hamburger activateHamburger={activateHamburger} />
      </div>
      <MenuList isHamburgerActive pageReferences={pageReferences} />
    </header>
  );
};

export default Header;
