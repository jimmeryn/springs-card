import React from "react";
import Logo from "../logo";
import Menu from "./menu";
import Hamb from "./hamb";
import Dropdown from "./drop";

const Nav = () => (
  <div>
    <div className="nav">
      <Logo isRef={true} />
      <Menu />
      <Hamb />
    </div>
    <Dropdown />
  </div>
);

export default Nav;
