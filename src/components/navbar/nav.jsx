import React from "react";
import Logo from "../logo";
import Menu from "./menu";

import Dropdown from "./drop";

const Nav = () => (
  <div className="menu">
    <div className="nav">
      <Logo isRef={true} />
      <Menu />
    </div>
    <Dropdown />
  </div>
);

export default Nav;
